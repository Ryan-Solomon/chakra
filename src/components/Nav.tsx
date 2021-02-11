import React from 'react';
import { Flex, Spacer, Link, Stack, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <Box bg='gray.800' color='white' p={2} boxShadow='lg'>
      <Flex mx='auto' justify='space-between' direction='row' maxW='200px'>
        <Link as={RouterLink} to='/'>
          Home
        </Link>
        <Link as={RouterLink} to='/form'>
          Form
        </Link>
        <Link as={RouterLink} to='/card'>
          Card
        </Link>
        <Link as={RouterLink} to='/list'>
          List
        </Link>
      </Flex>
    </Box>
  );
};
