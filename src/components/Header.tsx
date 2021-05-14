import React from 'react';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';

/*
 * JSX Element that displays the theme toggle and page header
 */

const Header = () => {
  return (
    <Box pt="20px" mb="30px" bg="brand.purple" h="70px">
      <Center>
        <Flex
          flexGrow={1}
          justifyContent="space-between"
          alignItems="center"
          maxW="1000"
        >
          <Heading color="white" size="md" as="h1">
            devjobs
          </Heading>
          <ColorModeSwitch />
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;
