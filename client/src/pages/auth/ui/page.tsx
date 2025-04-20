import { ROUTES_PATH } from "@/shared/const";
import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, NavLink, useLocation } from "react-router";

export default function Page() {
  const location = useLocation();

  const isSignin = location.pathname === ROUTES_PATH.SIGNIN;

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Невалидная почта"),
      password: (value) =>
        value.length < 6 ? "Пароль должен быть больше 6 символов" : null,
    },
  });

  return (
    <Container size={600}>
      <Card padding="lg" radius="md" withBorder>
        <Center>
          <Title order={2}>{isSignin ? "Авторизация" : "Регистрация"}</Title>
        </Center>
        <Box
          mt="md"
          component="form"
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <Flex gap="md" direction="column">
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              type="password"
              label="Пароль"
              placeholder="Введите пароль"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
          </Flex>
          <Group justify="space-between" mt="md">
            {isSignin ? (
              <Text>
                Нет аккаунта?{" "}
                <Link to={ROUTES_PATH.SIGNUP}>
                  <Anchor component="span">Зарегистрироваться</Anchor>
                </Link>
              </Text>
            ) : (
              <Text>
                Есть аккаунт?{" "}
                <Link to={ROUTES_PATH.SIGNIN}>
                  <Anchor component="span">Войти</Anchor>
                </Link>
              </Text>
            )}
            <Button type="submit">
              {isSignin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Group>
        </Box>
      </Card>
    </Container>
  );
}
