import { Button, Flex, Paper, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import {Amplify, Auth} from 'aws-amplify';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z.string().min(8, { message: 'パスワードは8文字以上で入力してください' }),
});

type FormValue = z.infer<typeof schema>;

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_AUTH_REGION,
    userPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_WEB_CLIENT_ID,
    cookieStorage: {
      domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_STORAGE_DOMAIN,
      path: '/',
      expires: 365,
      sameSite: "strict",
      secure: true
    },
  }
})

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValue>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      const result = await Auth.signUp({
        username: values.email,
        password: values.password,
      })
      console.log(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Flex justify="center">
      <Paper withBorder component="form" maw={420} p="lg" radius="md" shadow="md" w="100%" onSubmit={handleSubmit}>
        <Stack>
          <TextInput required label="メールアドレス" {...form.getInputProps('email')} />
          <PasswordInput required label="パスワード" {...form.getInputProps('password')} />
          <Button fullWidth loading={isLoading} mt="xl" type="submit">
            サインアップ
          </Button>
        </Stack>
      </Paper>
    </Flex>
  );
};
