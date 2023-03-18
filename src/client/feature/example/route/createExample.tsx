import { Container, Header, Stack, Text } from '@mantine/core';
import { CreateExampleForm } from '@src/client/feature/example/component/createExampleForm';

export const CreateExample = () => {
  return (
    <Container>
      <Header height={30}>デモページ</Header>
      <Stack mt="md">
        <Text size="xl" weight="bold">
          exmapleの作成ページです
        </Text>
        <CreateExampleForm />
      </Stack>
    </Container>
  );
};
