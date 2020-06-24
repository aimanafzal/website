/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import styles from "./styles/vertical-card.module.css";

import { Button, Row, Col, Container } from "react-bootstrap";

import { injectIntl, Link } from "gatsby-plugin-intl";

const isExternal = (href) => /^\/(?!\/)/.test(href);

const VerticalCard = ({ content, intl }) => (
  <Container fluid className={styles.verticalCard}>
    <Row className="h-100 d-flex">
      <Col sm className="h-100 d-flex flex-column">
        {content.icon && (
          <span className={styles.icon}>
            <content.icon />
          </span>
        )}
        <span className={styles.title}>{content.title}</span>
        {content.paragraphHref && (
          <a className={styles.paragraph} href={content.paragraphHref}>
            {content.paragraph}
          </a>
        )}
        {!content.paragraphHref && <span className={styles.paragraph}>{content.paragraph}</span>}
        {content.listTitle && (
          <>
            <span className={styles.listTitle}>{content.listTitle}</span>
            <br />
          </>
        )}

        {content.listTitle && (
          <ul>
            {content.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}

        {content.button && isExternal(content.button.href) && (
          <Link to={content.button.href}>
            <Button variant={content.button.variant}>{content.button.text}</Button>
          </Link>
        )}
        {content.button && !isExternal(content.button.href) && (
          <a href={content.button.href} target="blank" rel="noopener noreferrer" className="mt-auto">
            {content.button.text}
          </a>
        )}
      </Col>
    </Row>
  </Container>
);

export default injectIntl(VerticalCard);
