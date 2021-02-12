import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
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
      <Stack spacing={4} p={4} direction='column'>
        <Text fontSize={12}>Introduction to Chakra UI</Text>
        <Text noOfLines={4} as='p' fontSize={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          consectetur placeat cupiditate! Numquam nihil iusto cum porro nisi
          consequuntur quasi vitae cupiditate dolores provident nobis laudantium
          mollitia doloremque dignissimos, ut ratione dolore! Ipsum error labore
          culpa? Molestias fuga, autem, velit impedit architecto, dicta unde
          incidunt quo eaque est sit a.
        </Text>
        <HStack justify='space-between'>
          <Text>$20</Text>
          <HStack>
            <AiFillStar color='white' />
            <AiFillStar color='white' />
            <AiFillStar color='white' />
            <AiFillStar color='white' />
            <Text>Reviews</Text>
          </HStack>
        </HStack>
        <Button
          variant='outline'
          p={5}
          fontSize={10}
          colorScheme='teal'
          size='sm'
        >
          Sign Up Now
        </Button>
      </Stack>
    </Box>
  );
};
