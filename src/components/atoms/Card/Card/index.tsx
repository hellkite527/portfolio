import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from 'react-bootstrap'

export type CardProps = ComponentWithChildren & DefaultCardProps;

export const Card = (props: CardProps) => {
  return <DefaultCard {...props}>{props.children}</DefaultCard>
}
