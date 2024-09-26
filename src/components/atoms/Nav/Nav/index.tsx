import {
  Nav as DefaultNav,
  NavProps as DefaultNavProps
} from 'react-bootstrap'

export type NavProps = ComponentWithChildren & DefaultNavProps;

export const Nav = (props: NavProps) => {
  return <DefaultNav {...props}>{props.children}</DefaultNav>
}
