import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      prisma = new PrismaClient();
      const allPosts = await prisma.router.findMany({
        select: {
          id: false,
          title: true,
          icon: true,
          path: true
        }
      });
      res.status(200).json(allPosts);
      await prisma.$disconnect();
      break;

    case 'POST':
      if (!req.cookies?.token) {
        return res.status(401).json({
          message: 'Unauthorized'
        });
      }
      prisma = new PrismaClient();
      await prisma.router.create({
        data: {
          title: req.body.title,
          path: req.body.path,
          icon: req.body.icon
        }
      });
      res.status(200).json({
        code: 200,
        success: true,
        message: '添加成功'
      });
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
