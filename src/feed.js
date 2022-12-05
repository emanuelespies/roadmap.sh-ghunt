import React from 'react';
import { PageHeader} from './components/page-header';
import { GroupTitle} from './components/group-title';

import { Box, Flex } from '@chakra-ui/react';

export function Feed() {
  return (
    <Box maxWidth={'1200px'} mx='auto'>
      <PageHeader />

      <Flex alignItems='center' justifyContent='space-between'>
        <GroupTitle />
        <Box>
        </Box>
      </Flex>
    </Box>
  )
}


// Part 2 - 8m 26s