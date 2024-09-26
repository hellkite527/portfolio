import { ReactNode } from 'react'

declare global {
  export type ApprovedAny = any;

  export interface ComponentWithChildren<T = ReactNode> {
    children?: T;
  }
}
