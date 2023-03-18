import { Button, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { trpc } from '@src/lib/trpc';
import { z } from 'zod';

type FormValue = {
  name: string;
};

type Props = {
  onSuccess?: () => void;
  onError?: () => void;
};

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '1文字以上入力してください' })
    .max(255, { message: '255文字以内で入力してください' }),
});

export const CreateExampleForm = ({ onError, onSuccess }: Props) => {
  const form = useForm<FormValue>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = trpc.createExample.useMutation({
    onSuccess: () => {
      onSuccess?.();
      alert('登録完了しました');
    },
    onError: () => {
      onError?.();
      alert('登録に失敗しました');
    },
  });

  const handleSubmit = form.onSubmit(async ({ name }) => {
    await mutateAsync({ name });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput withAsterisk {...form.getInputProps('name')} />
        <Button disabled={isLoading} loading={isLoading} type="submit">
          送信
        </Button>
      </Stack>
    </form>
  );
};
