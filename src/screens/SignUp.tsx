import { VStack, Heading, Center } from "native-base";
import { Input } from "../components/Input";
export function SignUp() {
  return (
    <VStack bgColor="gray.200" flex={1} px={10}>
      <Center>
        <Heading my={24} fontSize={"xl"}>
          Create your account
        </Heading>
        <Input placeholder="Name" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
      </Center>
    </VStack>
  );
}
