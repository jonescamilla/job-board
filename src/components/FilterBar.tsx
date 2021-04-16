import { Box, Button, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { CheckboxField } from './formik/CheckboxField';
import { InputField } from './formik/InputField';

type initialValues = {
  description: string;
  location: string;
  full_time: boolean;
};

export const FilterBar = () => {
  const bg = useColorModeValue('contentBg.light', 'contentBg.dark');
  const [searching, setSearching] = useState<boolean>(false);

  const initialValues: initialValues = {
    description: '',
    location: '',
    full_time: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: initialValues) => {
        setSearching(true);
        setTimeout(() => {
          console.log(values);
          setSearching(false);
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
                  loadingText="loading..."
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
