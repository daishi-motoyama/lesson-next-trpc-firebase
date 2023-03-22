import { initializeFirebaseApp } from '@src/client/lib/firebase/firebase';
import { MantineProvider } from '@src/client/lib/mantine/provider';
import { trpc } from '@src/lib/trpc';
import type { AppProps } from 'next/app';
import Head from 'next/head';

initializeFirebaseApp();
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>lesson-next-trpc-firebase</title>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>

      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
