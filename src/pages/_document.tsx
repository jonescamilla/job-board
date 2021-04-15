import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

/**
 * used to augment the application's `<html>` and `<body>` tags
 */
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <title>Job Board</title>
        <meta
          name="description"
          content="Job Board utilizing GitHub Jobs Api, React, and Typescript"
        ></meta>
        <Head />
        <body>
          {/* make color mode persistent throughout app when you refresh the page */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
