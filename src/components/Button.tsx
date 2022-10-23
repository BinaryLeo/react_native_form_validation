import { Button as FormButton, IButtonProps, Text } from "native-base";
type ButtonProps = IButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <FormButton {...rest}
     w={"full"}
     h={16}
     bg={"cyan.800"}
     borderRadius={5}
     _pressed={{bgColor:"blueGray.600"}}
     >
      <Text color={"white"}>{title}</Text>
    </FormButton>
  );
}
