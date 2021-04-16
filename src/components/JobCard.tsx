import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { Position } from '../types';

export const JobCard = ({
  loading,
  position,
}: {
  loading: boolean;
  position?: Position;
}) => {
  const cardBg = useColorModeValue('contentBg.light', 'contentBg.dark');

  const { company_logo, created_at, type, company, title, location } = position
    ? position
    : {
        created_at: '',
        type: '',
        company: '',
        title: '',
        location: '',
        company_logo: '',
      };

  return (
    <Box
      maxW="xs"
      boxShadow="md"
      minH="3xs"
      minW="xs"
      borderRadius="lg"
      bg={cardBg}
    >
      <Avatar
        position="relative"
        top="-20px"
        left="30px"
        name={company}
        src={company_logo}
      />

      <Flex
        p="6"
        flexDir="column"
        justifyContent="space-between"
        alignItems="space-between"
      >
        <Skeleton isLoaded={!loading}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="x-small"
          >
            {moment(created_at, 'ddd MMM DD h:mm:ss [UTC] YYYY')
              .utc()
              .fromNow()}{' '}
            • {type}
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box
            fontSize="md"
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="x-small"
          >
            {company}
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box color="brand.purple" fontSize="x-small">
            {location}
          </Box>
        </Skeleton>
      </Flex>
    </Box>
  );
};
