import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

//dashboard k liye alag chahiye aur other k liye diff so bydefault color yellow.500 set kra hai
const Loader = ({color='yellow.500'}) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{transform:'scale(4)'}}>
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="transparent"
          color={color}
          size="xl"
        />
      </div>
    </VStack>
  );
};

export default Loader;
