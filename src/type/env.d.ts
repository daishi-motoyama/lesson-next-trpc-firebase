// eslint-disable-next-line @typescript-eslint/naming-convention
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_APP_ORIGIN: string;
    readonly NEXT_PUBLIC_TRPC_URL: string;
    readonly NEXT_PUBLIC_FIREBASE_API_KEY: string;
    readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    readonly NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_APP_ID: string;
    readonly NEXT_PUBLIC_AUTH_REGION: string;
    readonly NEXT_PUBLIC_AUTH_USER_POOL_ID: string;
    readonly NEXT_PUBLIC_AUTH_USER_POOL_WEB_CLIENT_ID: string;
    readonly NEXT_PUBLIC_AUTH_COOKIE_STORAGE_DOMAIN: string;
  }
}
