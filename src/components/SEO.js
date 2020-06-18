import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import defaultSiteImg from '../images/header-slide--1.jpg';

const SEO = ({ description, lang, meta, title, image = defaultSiteImg }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'google-site-verification',
          content: 'D3Od_nOuM3pcGi2lAEMhU4sqpU4bcuHBmA84S6lJtQc'
        },
        {
          name: 'keywords',
          content:
            'mayor of manila, mayor of manila website, isko moreno, isko moreno domagoso, manila news, covid response, manila, city of manila, mayorofmanila, manila programs'
        },
        {
          name: 'title',
          content:
            'Mayor of Manila - Official website of City of Manila Mayor Isko Moreno Domagoso.'
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
