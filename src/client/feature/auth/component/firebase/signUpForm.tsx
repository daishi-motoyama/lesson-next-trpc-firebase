import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import type { FirebaseError } from '@firebase/util';
import { Button, Flex, Paper, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z.string().min(8, { message: 'パスワードは8文字以上で入力してください' }),
});

type FormValue = z.infer<typeof schema>;

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValue>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(schema),
  });

  const auth = getAuth();

  const handleSubmit = form.onSubmit(async (values) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (e) {
      const error = e as FirebaseError;
      if (error.code === 'auth/email-already-in-use') {
        form.setFieldError('email', 'このメールアドレスは既に登録されています');
      }
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
