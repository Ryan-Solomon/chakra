import React from 'react';
import { Flex, Spacer, Link, Stack, Box, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BsLightningFill } from 'react-icons/bs';

export const Nav = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      as='nav'
      bg='gray.800'
      color='white'
      p={2}
      boxShadow='lg'
    >
      <HStack mx='auto' justify='center' spacing={40}>
        <Box>
          <BsLightningFill color='white' />
        </Box>
        <Flex
          as='ul'
          fontSize='lg'
          mx='auto'
          justify='space-between'
          direction='row'
          align='center'
          width='200px'
        >
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
        <Box>
          <BsLightningFill color='white' />
        </Box>
      </HStack>
    </Box>
  );
};
