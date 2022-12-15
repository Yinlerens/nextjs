import { PrismaClient } from '@prisma/client';
import redis from '@/redis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@/typings';
type Data = {
  message: Message;
};
type Error = {
  message?: string;
  error?: string;
};
export default async function (req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      prisma = new PrismaClient();
      const allPosts = await prisma.post.findMany();
      res.status(200).json({ message: 'c' });
      await prisma.$disconnect();
      break;

    case 'POST':
      if (!req.cookies?.token) {
        return res.status(401).json({
          message: 'Unauthorized'
        });
      }
      const { message } = req.body;
      const newMessage = {
        ...message,
        created_at: new Date()
      };
      const newMessage2 = {
        ...message,
        created_at: new Date()
      };
      delete newMessage2.id;
      await redis.hset('message', message.id, JSON.stringify(newMessage));
      prisma = new PrismaClient();
      const newPost = await prisma.post.create({
        data: newMessage2
      });
      res.status(200).json({ message: newMessage });
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
