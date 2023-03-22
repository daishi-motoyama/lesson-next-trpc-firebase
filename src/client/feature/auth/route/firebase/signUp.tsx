import { Container, Header, Stack, Text } from '@mantine/core';
import { SignUpForm } from '@src/client/feature/auth/component/firebase/signUpForm';

export const SignUp = () => {
  return (
    <Container>
      <Header height={30}>デモページ</Header>
      <Stack mt="md">
        <Text size="xl" weight="bold">
          Firebase Authenticationを使用したサインアップページ
        </Text>
        <SignUpForm />
      </Stack>
    </Container>
  );
};
