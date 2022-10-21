import { VStack, Heading, Center } from "native-base";
export function SignUp() {
  return (
    <VStack bgColor="gray.200" flex={1}>
      <Center>
        <Heading my={24} fontSize={"xl"}>
          Create your account
        </Heading>
      </Center>
    </VStack>
  );
}
