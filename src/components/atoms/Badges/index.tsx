import {
  Badge as DefaultBadge,
  BadgeProps as DefaultBadgeProps
} from "react-bootstrap";

export type BadgeProps =  ComponentWithChildren & DefaultBadgeProps;

export const Badge = (props: BadgeProps) => {
  return <DefaultBadge {...props}>{props.children}</DefaultBadge>
}