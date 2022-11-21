import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const prisma = new PrismaClient();
      const user = await prisma.user.findUnique({ where: { id: +req.query.userId! } });
      res.status(200).json(user);
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
