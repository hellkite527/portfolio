import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from 'react-bootstrap'

export type CardTitleProps = ComponentWithChildren & DefaultCardProps;

export const CardTitle = (props: CardTitleProps) => {
  return <DefaultCard.Title {...props}>{props.children}</DefaultCard.Title>
}
