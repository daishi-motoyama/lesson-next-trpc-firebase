/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as trpc from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

// @link https://trpc.io/docs/context#example-code
export const createContext = async ({ res, req }: CreateNextContextOptions) => {
  // TODO 後の実装でaccessTokenの取得等行う。現状は暫定対応
  return { req, res };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
