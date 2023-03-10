import {
  Col as DefaultCol,
  ColProps as DefaultColProps
} from "react-bootstrap";

export type ColProps =  ComponentWithChildren & DefaultColProps;

export const Col = (props: ColProps) => {
  return <DefaultCol {...props}>{props.children}</DefaultCol>
}