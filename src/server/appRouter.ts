/**
 * This file contains the root router of your tRPC-backend
 */
import { exampleRouter } from '@src/server/routers/example.router';
import { mergeRouters } from '@src/server/trpc';

export const appRouter = mergeRouters(exampleRouter);

export type AppRouter = typeof appRouter;
