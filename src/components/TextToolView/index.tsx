import { ChangeEventHandler, useState } from 'react';

import { ArrowDownIcon } from '@chakra-ui/icons';
import {
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
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
  const [afterText, setAfterText] = useState(text);
  const [error, setError] = useState<Error | null>(null);
  const handleChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setText(event.target.value);
    try {
      setError(null);
      setAfterText(textAction(text));
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error(String(e)));
      }
    }
  };

  return (
    <Center pos="fixed" w="100%" h="100%">
      <VStack maxW="100%" width="100%">
        <Heading>{title}</Heading>
        <Container maxW="90%">
          <FormControl>
            <FormLabel htmlFor="beforeText">Before</FormLabel>
            <FormHelperText>Enter the text to change.</FormHelperText>

            <Textarea
              id="beforeText"
              placeholder="Enter Text"
              minH="30ex"
              resize="vertical"
              value={text}
              onChange={handleChangeText}
            />
          </FormControl>
        </Container>
        <ArrowDownIcon />
        <Container maxW="90%">
          <FormControl isInvalid={!!error}>
            <FormLabel htmlFor="beforeText">After</FormLabel>
            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}

            <Textarea
              id="afterText"
              minH="30ex"
              resize="vertical"
              value={afterText}
              readOnly
            />
          </FormControl>
        </Container>
      </VStack>
    </Center>
  );
}

export default TextToolView;
