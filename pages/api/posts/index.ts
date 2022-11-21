import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../../../utils/jwt';
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
      const authorId = (await verifyToken(req.cookies.token)).id;
      prisma = new PrismaClient();
      const newPost = await prisma.post.create({
        data: {
          title: req.body.title,
          content: req.body.content,
          createdAt: new Date(),
          authorId,
          tags: req.body.tags.join(','),
          imageUrl: req.body.imageUrl
        }
      });
      res.status(200).json(newPost);
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
