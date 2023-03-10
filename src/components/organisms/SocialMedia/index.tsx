import {Button} from "components/atoms";
import {SocialMedias} from "models/data";

type SocialMediaProps = {
  socialMedia: SocialMedias[] | undefined;
}

export const SocialMedia = ({socialMedia}: SocialMediaProps) => {
  return (
    <>
      { Array.isArray(socialMedia) && socialMedia.map((media: SocialMedias, index: number) => (
        <Button
          key={index}
          href={media.url}
          target='_blank'
          className='social-media-btn'
        >
          <i className={`bi bi-${media.icon}`}></i>
        </Button>
      ))}
    </>
  );
};
