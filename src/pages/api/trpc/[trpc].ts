/**
 * This file contains tRPC's HTTP response handler
 */
import { appRouter } from '@src/server/appRouter';
import { createContext } from '@src/server/context';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  /**
   * @link https://trpc.io/docs/context
   */
  createContext,
});
