import {
  Container as DefaultContainer,
  ContainerProps as DefaultContainerProps
} from 'react-bootstrap'

export type ContainerProps = ComponentWithChildren & DefaultContainerProps;

export const Container = (props: ContainerProps) => {
  return <DefaultContainer {...props}>{props.children}</DefaultContainer>
}
