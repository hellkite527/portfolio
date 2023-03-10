import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from "react-bootstrap";

export type CardHeaderProps =  ComponentWithChildren & DefaultCardProps;

export const CardHeader = (props: CardHeaderProps) => {
  return <DefaultCard.Header {...props}>{props.children}</DefaultCard.Header>
}