import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Card = () => {
  return (
    <Box
      background='gray.700'
      mx='auto'
      mt={10}
      width='200px'
      borderRadius={10}
    >
      <Image
        boxSize='100%'
        objectFit='cover'
        src='https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg'
        alt='Segun Adebayo'
        borderRadius={10}
        borderBottomRightRadius={0}
        borderBottomLeftRadius={0}
      />
      <Flex>
        <Text>Introduction to Chakra UI</Text>
      </Flex>
    </Box>
  );
};
