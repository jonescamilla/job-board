import { Box, Button, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import GHJobsApi from '../api';
import { positionParameters } from '../types';
import { CheckboxField } from './formik/CheckboxField';
import { InputField } from './formik/InputField';

export const FilterBar = ({ setFiltered, setLoad }) => {
  const bg = useColorModeValue('contentBg.light', 'contentBg.dark');
  const [searching, setSearching] = useState<boolean>(false);

  // initialValues used in state managed by formik
  const initialValues: positionParameters = {
    description: '',
    location: '',
    full_time: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({
        description,
        location,
        full_time,
      }: positionParameters) => {
        setSearching(true);
        setLoad(true);
        // setTimeout only in place to demonstrate skeletons
        setTimeout(() => {
          // make a call to the api passing all params
          GHJobsApi.positions(description, location, full_time).then(
            (values) => {
              // set the new values returned by the api to the state
              setFiltered(values);
              setLoad(false);
              setSearching(false);
            }
          );
        }, 1000);
      }}
    >
      {() => (
        <Form>
          <Center pb="100">
            <Flex
              borderRadius="10px"
              minW="1000"
              alignItems="center"
              justifyContent="space-around"
              bg={bg}
              p="1"
              pl="5"
              pr="5"
            >
              <InputField
                name="description"
                placeholder="Filter by title, companies, expertise..."
              />

              <InputField name="location" placeholder="Filter by location..." />

              <CheckboxField name="full_time" displayText="Full Time Only" />

              <Box>
                <Button
                  bg="brand.purple"
                  type="submit"
                  color="white"
                  isLoading={searching}
                  mr="2"
                >
                  Search
                </Button>
              </Box>
            </Flex>
          </Center>
        </Form>
      )}
    </Formik>
  );
};
