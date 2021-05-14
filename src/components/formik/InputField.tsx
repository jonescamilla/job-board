import {
  FormControl,
  FormErrorMessage,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import { fieldProps } from './types';

/**
 * Custom Formik Field that returns JSX of a Chakra-ui Input w/ predefined styling
 */

export const InputField = ({
  name,
  placeholder,
  icon,
}: fieldProps & { icon?: React.ReactNode }) => (
  <FastField name={name}>
    {({ field, meta }: FieldProps) => {
      const isInvalid = !!meta.error && meta.touched;

      return (
        <FormControl p="2" name={name} isInvalid={isInvalid}>
          {icon ? <InputLeftElement children={icon} /> : null}
          <Input
            borderRadius="md"
            size="sm"
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            variant="filled"
          />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      );
    }}
  </FastField>
);
