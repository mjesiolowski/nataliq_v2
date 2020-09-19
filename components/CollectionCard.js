import {
  MOBILE_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  COLLECTION_DEFAULT_ALT_TEXT,
} from '../constants';

const CollectionCard = ({
  title,
  mainImageDesktop,
  mainImageTablet,
  mainImageMobile,
}) => {
  const desktopImg = mainImageDesktop?.url;
  const tabletImg = mainImageTablet?.url;
  const mobileImg = mainImageMobile?.url;

  const imgAlt = mainImageDesktop?.description;

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
          alt={imgAlt || COLLECTION_DEFAULT_ALT_TEXT}
        />
      </picture>
    </div>
  );
};
export default CollectionCard;
