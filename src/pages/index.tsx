import { Center, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GHJobsApi from '../api';
import { Container } from '../components/Container';
import { FilterBar } from '../components/FilterBar';
import Header from '../components/Header';
import { JobCard } from '../components/JobCard';
import { Position } from '../types';

const Index = () => {
  const [results, setResults] = useState<null | Position[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const setFiltered = (results: Position[]) => setResults(results);
  const setLoad = (bool: boolean) => setLoading(bool);

  useEffect(() => {
    setLoading(true);
    // setTimeout only in place to demonstrate skeletons
    setTimeout(() => {
      // make a call to the api passing no params to get unfiltered results
      GHJobsApi.positions().then((res) => {
        // set the values returned to state
        setResults(res);
        setLoading(false);
      });
    });
  }, []);

  return (
    <Container>
      <Header />
      <FilterBar setFiltered={setFiltered} setLoad={setLoad} />
      <Center>
        <SimpleGrid maxW="1000" columns={3} spacingY="10" spacingX="6">
          {loading
            ? // if we are `loading` render an array of boxes with skeletons
              new Array(15)
                .fill(undefined)
                .map((_item, index) => (
                  <JobCard key={`skeleton-card-${index}`} loading={loading} />
                ))
            : // else render an array of boxes with position information
              results?.map((position) => (
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
