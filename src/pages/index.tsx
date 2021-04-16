import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  position,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GHJobsApi from '../api';
import { ColorModeSwitch } from '../components/ColorModeSwitch';
import { Container } from '../components/Container';
import { JobCard } from '../components/JobCard';
import { Position } from '../types';

const Index = () => {
  const [results, setResults] = useState<null | Position[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      GHJobsApi.positions({}).then((res) => {
        setResults(res);
        setLoading(false);
      });
    });
  }, []);
  const skeletons = () => {
    const emptyArr = new Array(12).fill(undefined);
    const results = emptyArr.map(() => {
      return (
        <Skeleton>
          <Box
            maxW="xs"
            boxShadow="md"
            minH="3xs"
            borderRadius="lg"
            m="3"
            mb="5"
            mt="5"
          >
            <Box></Box>
            <SkeletonCircle position="relative" top="-20px" left="30px" />
          </Box>
        </Skeleton>
      );
    });
    return results;
  };

  return (
    <Container>
      <Box pt="20px" mb="30px" bg="brand.purple" h="70px">
        <Flex
          pl="60px"
          pr="60px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="md" as="h1">
            devjobs
          </Heading>
          <ColorModeSwitch />
        </Flex>
      </Box>
      <Center>
        <SimpleGrid maxW="1000" columns={3} spacingY="10" spacingX="6">
          {loading
            ? new Array(15)
                .fill(undefined)
                .map(() => <JobCard loading={loading} />)
            : results?.map((position) => (
                <JobCard loading={loading} position={position} />
              ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Index;
