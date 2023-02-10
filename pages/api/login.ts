import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { signToken } from '../../utils/jwt';
import redis from '@/redis';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const prisma = new PrismaClient();
        const user = await redis.get(req.body.username);
        // const user = await prisma.user.findUnique({
        //   where: { username: req.body.username }
        // });
        if (!user || !bcrypt.compareSync(req.body.password, user)) {
          return res.status(200).json({
            code: 500,
            success: false,
            message: '用户名或密码错误'
          });
        }
        res
          .status(200)
          .setHeader('set-cookie', 'token=' + (await signToken(Number(user))))
          .json({ code: 200, success: true, message: 'success' });
        await prisma.$disconnect();
      } catch (error: any) {
        res.status(500).json(error);
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
