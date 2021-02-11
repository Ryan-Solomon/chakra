import React from 'react';
import { Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <Flex direction='row'>
      <Link as={RouterLink} to='/'>
        Home
      </Link>
    </Flex>
  );
};
