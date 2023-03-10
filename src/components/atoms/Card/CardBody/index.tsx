import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from "react-bootstrap";

export type CardBodyProps =  ComponentWithChildren & DefaultCardProps;

export const CardBody = (props: CardBodyProps) => {
  return <DefaultCard.Body {...props}>{props.children}</DefaultCard.Body>
}