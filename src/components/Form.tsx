import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

export const Form = () => {
  return (
    <Box maxW='50%' mx='auto' mt={20}>
      <Stack spacing={8}>
        <FormControl id='first-name'>
          <FormLabel mb={3}>First Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl id='last-name'>
          <FormLabel mb={3}>Last Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl id='email'>
          <FormLabel mb={3}>Email address</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl id='password'>
          <FormLabel mb={3}>Password</FormLabel>
          <Input type='password' />
        </FormControl>
        <FormControl id='password'>
          <FormLabel mb={3}>Confirm Password</FormLabel>
          <Input type='password' />
        </FormControl>
      </Stack>
    </Box>
  );
};
