import React, { useEffect, useState } from 'react';
import GHJobsApi from '../api';
import { Container } from '../components/Container';
import { Position } from '../types';
import ReactHtmlParser from 'react-html-parser';
import { SkeletonText } from '@chakra-ui/skeleton';
import { Center } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';

const Description = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobInformation, setJobInformation] = useState<null | Position>(null);
  const id = 'c67453f4-630b-437d-9d11-ff530e56ce6a';

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      GHJobsApi.positionById(id).then((res) => {
        setJobInformation(res);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <Container>
      <Header />
      <Center>
        {loading ? (
          <SkeletonText noOfLines={30} />
        ) : (
          <Box maxW="1000">{ReactHtmlParser(jobInformation?.description)}</Box>
        )}
      </Center>
    </Container>
  );
};

export default Description;
