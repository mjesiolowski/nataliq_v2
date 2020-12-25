import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { BLOG_HREF } from '../constants';

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
          <span key={uuidv4()}>{subpageIndex}</span>
        );
      }

      if (isFirstPage || isLastPage) {
        return (
          <Link key={uuidv4()} href={`/${BLOG_HREF}${subpageIndex}`}>
            <a>{subpageIndex}</a>
          </Link>
        );
      }

      if (subpageIndex === currentSlug + 1) {
        return (
          <React.Fragment key={uuidv4()}>
            <Link href={`/${BLOG_HREF}${subpageIndex}`}>
              <a>{subpageIndex}</a>
            </Link>
            <span>...</span>
          </React.Fragment>
        );
      }

      if (subpageIndex === currentSlug - 1) {
        return (
          <React.Fragment key={uuidv4()}>
            <span>...</span>
            <Link href={`/${BLOG_HREF}${subpageIndex}`}>
              <a>{subpageIndex}</a>
            </Link>
          </React.Fragment>
        );
      }

      return null;
    }));
};

export default renderPagination;
