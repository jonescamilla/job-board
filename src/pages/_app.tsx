import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../theme';

/**
 * override the default `App` component which initializes pages to add global CSS
 */
function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
