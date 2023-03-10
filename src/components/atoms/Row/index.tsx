import {
  Row as DefaultRow,
  RowProps as DefaultRowProps
} from "react-bootstrap";

export type RowProps =  ComponentWithChildren & DefaultRowProps;

export const Row = (props: RowProps) => {
  return <DefaultRow {...props}>{props.children}</DefaultRow>
}