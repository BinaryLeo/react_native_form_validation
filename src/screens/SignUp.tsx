import { VStack, Heading, Center } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
export function SignUp() {
  return (
    <VStack bgColor="gray.200" flex={1} px={10}>
      <Center>
        <Heading my={24} fontSize={"xl"}>
          Create your account
        </Heading>
        <Input placeholder="Name" />
        <Input placeholder="E-mail" ErrorMessage="Insert your e-mail"/>
        <Input placeholder="Password" ErrorMessage="Insert your password"/>
        <Input placeholder="Confirm password" ErrorMessage="Password does not match"/>
        <Button title="SignUp"/>
      </Center>
    </VStack>
  );
}
