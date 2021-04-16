import { Box, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GHJobsApi from '../api';
import { ColorModeSwitch } from '../components/ColorModeSwitch';
import { Container } from '../components/Container';
import { FilterBar } from '../components/FilterBar';
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

  return (
    <Container>
      <Box pt="20px" mb="30px" bg="brand.purple" h="70px">
        <Flex
          pl="60px"
          pr="60px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="white" size="md" as="h1">
            devjobs
          </Heading>
          <ColorModeSwitch />
        </Flex>
      </Box>
      <FilterBar />
      <Center>
        <SimpleGrid maxW="1000" columns={3} spacingY="10" spacingX="6">
          {loading
            ? new Array(15)
                .fill(undefined)
                .map((_item, index) => (
                  <JobCard key={`skeleton-card-${index}`} loading={loading} />
                ))
            : results?.map((position) => (
                <JobCard
                  key={position.id}
                  loading={loading}
                  position={position}
                />
              ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Index;
