import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Brand() {
  return (
    <Flex alignItems='center'>
      <Image src='/logo192.png' />
      <Box>
        <Heading fontSize='24px'>GitHunt</Heading>
        <Text color='gray.600'>Most starred projects on GitHub</Text>
      </Box>
    </Flex>
  );
}