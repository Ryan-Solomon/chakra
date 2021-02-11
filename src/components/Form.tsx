import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

export const Form = () => {
  return (
    <Box maxW='50%' mx='auto' mt={20}>
      <FormControl id='email'>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
  );
};
