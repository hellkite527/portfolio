import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps
} from 'react-bootstrap'

export type ButtonProps = ComponentWithChildren & DefaultButtonProps;

export const Button = (props: ButtonProps) => {
  return <DefaultButton {...props}>{props.children}</DefaultButton>
}
