import Link from 'next/link';

const renderPagination = (subpagesCount, slug) => {
  const subpagesList = [...Array(subpagesCount).keys()];
  const currentSlug = Number(slug);

  return (
    subpagesList.map((item, index) => {
      const subpageIndex = index + 1;
      const isFirstPage = subpageIndex === 1;
      const isLastPage = subpageIndex === subpagesCount;

      if (subpageIndex === currentSlug) {
        return (
          <span>{subpageIndex}</span>
        );
      }

      if (isFirstPage || isLastPage) {
        return (
          <Link href={`${subpageIndex}`}>
            <a>{subpageIndex}</a>
          </Link>
        );
      }

      if (subpageIndex === currentSlug + 1) {
        return (
          <>
            <Link href={`${subpageIndex}`}>
              <a>{subpageIndex}</a>
            </Link>
            <span>...</span>
          </>
        );
      }

      if (subpageIndex === currentSlug - 1) {
        return (
          <>
            <span>...</span>
            <Link href={`${subpageIndex}`}>
              <a>{subpageIndex}</a>
            </Link>
          </>
        );
      }

      return null;
    }));
};

export default renderPagination;
