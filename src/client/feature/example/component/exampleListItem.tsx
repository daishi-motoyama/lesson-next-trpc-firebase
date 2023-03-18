import { Button, Card, Image, Text } from '@mantine/core';
import type { Example } from '@prisma/client';
import { pagesPath } from '@src/client/lib/pathpida/$path';
import Link from 'next/link';

type Props = {
  exampleId: Example['id'];
  name: Example['name'];
};

export const ExampleListItem = ({ exampleId, name }: Props) => {
  return (
    <Card withBorder padding="lg" radius="md" shadow="sm">
      <Card.Section>
        <Image alt="NoImage" height={160} src="https://placehold.jp/200x200.png" />
      </Card.Section>

      <Text color="dimmed" size="sm">
        {name}
      </Text>

      <Link href={pagesPath.example._exampleId(exampleId).$url()}>
        <Button fullWidth color="blue" component="a" mt="md" radius="md" variant="light">
          詳細ページへ
        </Button>
      </Link>
    </Card>
  );
};
