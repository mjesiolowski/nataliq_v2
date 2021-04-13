import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { BLOG_HREF } from '../../constants';
import styles from './pagination.module.scss';

const Pagination = ({ subpagesCount: maxSubpagesCount, slug }) => {
  const subpagesList = [...Array(maxSubpagesCount).keys()];
  const currentSlug = Number(slug);

  return (
    <div className={styles.paginationSection}>
      { subpagesList.map((item, index) => {
        const subpageIndex = index + 1;
        const isFirstPage = subpageIndex === 1;
        const isLastPage = subpageIndex === maxSubpagesCount;

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

        if (subpageIndex === currentSlug + 1 && subpageIndex > maxSubpagesCount - 2) {
          return (
            <React.Fragment key={uuidv4()}>
              <Link href={`/${BLOG_HREF}${subpageIndex}`}>
                <a>{subpageIndex}</a>
              </Link>
            </React.Fragment>
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

        if (subpageIndex === currentSlug - 1 && subpageIndex <= 2) {
          return (
            <React.Fragment key={uuidv4()}>
              <Link href={`/${BLOG_HREF}${subpageIndex}`}>
                <a>{subpageIndex}</a>
              </Link>
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
      })}
    </div>
  );
};

export default Pagination;
