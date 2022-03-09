import { ChangeEventHandler, useState } from 'react';

import {
  Button,
  Center,
  Container,
  Heading,
  Textarea,
  VStack,
} from '@chakra-ui/react';

interface TextToolViewProps {
  title: string;
  textAction: (text: string) => string;
}

function TextToolView({ title, textAction }: TextToolViewProps) {
  const [text, setText] = useState('');
  const handleChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    setText(event.target.value);

  const handleRun = () => setText(textAction(text));
  return (
    <Center pos="fixed" w="100%" h="100%">
      <VStack maxW="100%" width="100%">
        <Heading>{title}</Heading>
        <Container maxW="90%">
          <Textarea
            placeholder="Enter Text"
            minH="30ex"
            resize="vertical"
            value={text}
            onChange={handleChangeText}
          />
        </Container>
        <Button colorScheme="blue" onClick={handleRun}>
          Button
        </Button>
      </VStack>
    </Center>
  );
}

export default TextToolView;
