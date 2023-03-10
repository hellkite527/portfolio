import {
  Card as DefaultCard,
  CardProps as DefaultCardProps,
  ButtonProps
} from "react-bootstrap";

export type CardLinkProps =  ComponentWithChildren & DefaultCardProps & ButtonProps;

export const CardLink = (props: CardLinkProps) => {
  return <DefaultCard.Link {...props}>{props.children}</DefaultCard.Link>
}