import { Text } from '@chakra-ui/react';
import React from 'react';

export function GroupTitle() {
  return (
    <Text fontSize='24px' fontWeight={700}>
      This week <Text fontSize='16px' fontWeight={500} ml='5px' as='span'>May 16, 2020 - May 23, 2020</Text>
    </Text>
  );
}