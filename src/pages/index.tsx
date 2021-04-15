import { Box } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitch } from '../components/ColorModeSwitch';
import { Container } from '../components/Container';

const Index = (): any => {
  return (
    <Container>
      <Box bg="brand.purple" h="70px"></Box>
      <ColorModeSwitch />
    </Container>
  );
};

export default Index;
