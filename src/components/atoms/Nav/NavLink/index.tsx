import {
  Nav as DefaultNav,
  NavProps as DefaultNavProps,
  ButtonProps
} from 'react-bootstrap'

export type NavLinkProps = ComponentWithChildren & DefaultNavProps & ButtonProps;

export const NavLink = (props: NavLinkProps) => {
  return <DefaultNav.Link {...props}>{props.children}</DefaultNav.Link>
}
