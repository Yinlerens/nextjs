import { PrismaClient } from '@prisma/client';
import { Redis } from '@upstash/redis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      const redis = Redis.fromEnv();
      let post = await redis.get('post-' + req.query.postId);
      if (post) {
        res.status(200).json(post);
        return;
      }
      if (!post) {
        prisma = new PrismaClient();
        post = await prisma.post.findUnique({
          where: { id: +req.body.postId },
          include: { author: true }
        });
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({ error: 'Post not found.' });
        }
        await redis.set('post-' + req.body.postId, JSON.stringify(post));
        await prisma.$disconnect();
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
