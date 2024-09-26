import {
  Nav as DefaultNav,
  NavProps as DefaultNavProps
} from 'react-bootstrap'

export type NavItemProps = ComponentWithChildren & DefaultNavProps;

export const NavItem = (props: NavItemProps) => {
  return <DefaultNav.Item {...props}>{props.children}</DefaultNav.Item>
}
