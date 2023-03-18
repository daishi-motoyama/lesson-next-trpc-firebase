import { Container, Header, LoadingOverlay, Stack, Text } from '@mantine/core';
import { ExampleListItem } from '@src/client/feature/example/component/exampleListItem';
import { trpc } from '@src/lib/trpc';

export const ExampleList = () => {
  const { data, isLoading } = trpc.findAllExample.useQuery();

  return (
    <Container>
      <Header height={30}>デモページ</Header>
      <Stack mt="md">
        <Text size="xl" weight="bold">
          exmaple一覧ページです
        </Text>
        {isLoading ? (
          <LoadingOverlay visible />
        ) : (
          <Stack>
            {data?.map((example) => {
              return <ExampleListItem exampleId={example.id} key={example.id} name={example.name} />;
            })}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};
