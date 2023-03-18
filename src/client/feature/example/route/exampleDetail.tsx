import { Container, Header, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export const ExampleDetail = () => {
  const router = useRouter();

  const exampleId = router.query.exampleId as string;

  return (
    <Container>
      <Header height={30}>デモページ</Header>
      <Stack mt="md">
        <Text size="xl" weight="bold">
          {`exmaleId:${exampleId} 詳細ページです`}
        </Text>
      </Stack>
    </Container>
  );
};
