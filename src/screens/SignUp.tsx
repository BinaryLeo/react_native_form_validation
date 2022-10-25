import { VStack, Heading, Center } from "native-base";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import {
  inputName,
  inputMail,
  passwordMinLength,
  requiredName,
  requiredMail,
  requiredPassword,
  requiredConfirmPassword,
  validatePassword,
} from "../constants/";
const signUpSchema = yup.object({
  name: yup.string().required(requiredName).min(6, inputName),
  email: yup.string().required(requiredMail).email(inputMail), //* check if we have an email and if its valid.
  password: yup.string().required(requiredPassword).min(6, passwordMinLength),
  password_confirm: yup
    .string()
    .required(requiredConfirmPassword)
    .min(6, passwordMinLength)
    .oneOf([yup.ref("password"), null], validatePassword),
});
type formDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};
export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataProps>({ resolver: yupResolver(signUpSchema) });
  function handleSignUp(data: formDataProps) {
    console.log(data);
  }
  return (
    <VStack bgColor="gray.200" flex={1} px={10}>
      <Center>
        <Heading my={24} fontSize={"xl"}>
          Create your account
        </Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Name"
              onChangeText={onChange}
              ErrorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              ErrorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Password"
              onChangeText={onChange}
              ErrorMessage={errors.password?.message}
              secureTextEntry
            />
          )}
        />
        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Confirm password"
              onChangeText={onChange}
              ErrorMessage={errors.password_confirm?.message}
              secureTextEntry
            />
          )}
        />
        <Button title="SignUp" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}
