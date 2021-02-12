import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Card = () => {
  return (
    <Box
      background='gray.700'
      mx='auto'
      mt={10}
      width='200px'
      borderRadius={10}
      boxShadow='dark-lg'
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
      <Stack spacing={3} p={3} direction='column'>
        <Text fontSize={12}>Introduction to Chakra UI</Text>
        <Text as='p' fontSize={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          consectetur placeat cupiditate! Numquam nihil iusto cum porro nisi
          consequuntur quasi vitae cupiditate dolores provident nobis laudantium
          mollitia doloremque dignissimos, ut ratione dolore! Ipsum error labore
          culpa? Molestias fuga, autem, velit impedit architecto, dicta unde
          incidunt quo eaque est sit a.
        </Text>
      </Stack>
    </Box>
  );
};
