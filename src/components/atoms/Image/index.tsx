import {
  Image as DefaultImage,
  ImageProps as DefaultImageProps
} from 'react-bootstrap'

export type ImageProps = DefaultImageProps;

export const Image = (props: ImageProps) => {
  return <DefaultImage {...props} />
}
