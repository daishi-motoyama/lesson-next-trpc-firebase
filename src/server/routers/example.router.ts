import { prisma } from '@src/lib/prisma';
import { publicProcedure, router } from '@src/server/trpc';
import { z } from 'zod';

export const exampleRouter = router({
  createExample: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(1, { message: '1文字以上入力してください' })
          .max(255, { message: '255文字以内で入力してください' }),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.example.create({
        data: {
          name: input.name,
        },
      });
    }),
  findAllExample: publicProcedure.query(async () => {
    return await prisma.example.findMany();
  }),
});
