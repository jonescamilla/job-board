import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';

/**
 * function that returns a `JSX.Element` with pre-configured `JSX Attributes`
 * @param {any} props any children you wish to render within Container or JSX attributes you wish to add
 *
 * used to handle theme toggling and generic application theming
 */

export const Container = (props: any) => {
  const bg = useColorModeValue('bg.light', 'bg.dark');
  const color = useColorModeValue('black', 'white');

  return (
    <Box
      overflow="auto"
      height="100vh"
      width="100%"
      bg={bg}
      color={color}
      {...props}
    ></Box>
  );
};
