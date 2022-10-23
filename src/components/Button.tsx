import { Button as FormButton, IButtonProps, Text } from "native-base";
type ButtonProps = IButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <FormButton {...rest}>
      <Text>{title}</Text>
    </FormButton>
  );
}
