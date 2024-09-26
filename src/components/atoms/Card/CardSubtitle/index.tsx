import {
  Card as DefaultCard,
  CardProps as DefaultCardProps
} from 'react-bootstrap'

export type CardSubtitleProps = ComponentWithChildren & DefaultCardProps;

export const CardSubtitle = (props: CardSubtitleProps) => {
  return <DefaultCard.Subtitle {...props}>{props.children}</DefaultCard.Subtitle>
}
