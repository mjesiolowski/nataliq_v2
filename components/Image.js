import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
} from '../constants';

const Image = ({
  alt,
  title,
  desktopImage,
  tabletImage,
  mobileImage,
}) => {
  const desktopImg = desktopImage?.url;
  const tabletImg = tabletImage?.url;
  const mobileImg = mobileImage?.url;
  const imgAlt = alt || COLLECTION_DEFAULT_ALT_TEXT;

  return (
    <div>

      <h2>{title}</h2>

      <picture>
        <source
          media={`(max-width: ${MOBILE_BREAKPOINT})`}
          srcSet={mobileImg}
        />
        <source
          media={`(max-width: ${DESKTOP_BREAKPOINT})`}
          srcSet={tabletImg}
        />
        <img
          src={desktopImg}
          alt={imgAlt}
        />
      </picture>
    </div>
  );
};
export default Image;
