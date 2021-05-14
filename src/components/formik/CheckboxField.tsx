import { FormControl, Flex, Text, Checkbox } from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import React from 'react';
import { fieldProps } from './types';

/**
 * Custom Formik Field that returns JSX of a Chakra-ui Checkbox w/ predefined styling
 */

export const CheckboxField = ({
  name,
  displayText,
}: fieldProps & { displayText?: string }) => (
  <FastField name={name}>
    {({ meta, field }: FieldProps) => {
      const isInvalid = !!meta.error && meta.touched;

      return (
        <FormControl name={name} isInvalid={isInvalid}>
          <Flex p={4} w="3xs">
            <Checkbox iconSize="lg" isInvalid={isInvalid} id={name} {...field}>
              <Text fontWeight="bold" fontSize="xs">
                {displayText}
              </Text>
            </Checkbox>
          </Flex>
        </FormControl>
      );
    }}
  </FastField>
);
