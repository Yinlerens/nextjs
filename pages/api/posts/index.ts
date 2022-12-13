import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      prisma = new PrismaClient();
      const allPosts = await prisma.post.findMany({ include: { author: true } });
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
      const newPost = await prisma.post.create({
        data: {
          message: req.body.message,
          img: req.body.img,
          createdAt: new Date(),
          username: req.body.username
        }
      });
      res.status(200).json(newPost);
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
