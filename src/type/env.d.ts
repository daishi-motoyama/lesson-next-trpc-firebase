// eslint-disable-next-line @typescript-eslint/naming-convention
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_APP_ORIGIN: string;
    readonly NEXT_PUBLIC_TRPC_URL: string;
  }
}
