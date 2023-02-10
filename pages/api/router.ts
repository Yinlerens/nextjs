import redis from '@/redis';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      prisma = new PrismaClient();
      const router = await redis.hget('menu', 'menu');
      res.status(200).json(JSON.parse(router as string) );
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
