import { ChangeEventHandler, useState } from 'react';

import {
  Button,
  Center,
  Container,
  Heading,
  Textarea,
  VStack,
} from '@chakra-ui/react';

function Nl2Br() {
  const [text, setText] = useState('');
  const handleChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    setText(event.target.value);

  const handleNl2Br = () => {
    const newText = text.replaceAll(/\n/g, '<br>\n');
    setText(newText);
  };
  return (
    <Center pos="fixed" w="100%" h="100%">
      <VStack maxW="100%" width="100%">
        <Heading>nl2br</Heading>
        <Container maxW="90%">
          <Textarea
            placeholder="Enter Text"
            minH="30ex"
            resize="vertical"
            value={text}
            onChange={handleChangeText}
          />
        </Container>
        <Button colorScheme="blue" onClick={handleNl2Br}>
          Button
        </Button>
      </VStack>
    </Center>
  );
}

export default Nl2Br;
