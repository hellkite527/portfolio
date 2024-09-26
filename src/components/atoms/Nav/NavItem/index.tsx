import React, { ReactNode } from 'react'
import { Nav as DefaultNav, NavItemProps as BsNavItemProps } from 'react-bootstrap'

// Define the props for the custom NavItem atom component
export type NavItemProps = BsNavItemProps & {
  children: ReactNode
  eventKey?: string | number | null // Optional eventKey for navigation
  onSelect?: (eventKey: string | number | null) => void // Optional onSelect callback
}

// Create the NavItem atom component
const NavItem: React.FC<NavItemProps> = ({ children, eventKey, onSelect, ...rest }) => {
  return (
    <DefaultNav.Item eventKey={eventKey} onSelect={onSelect} {...rest}>
      {children}
    </DefaultNav.Item>
  )
}

export default NavItem
