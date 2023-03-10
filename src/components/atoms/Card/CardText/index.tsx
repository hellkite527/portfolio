import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from "react-bootstrap";

export type CardTextProps =  ComponentWithChildren & DefaultCardProps;

export const CardText = (props: CardTextProps) => {
  return <DefaultCard.Text {...props}>{props.children}</DefaultCard.Text>
}