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

import useTransformTool, { TransformText } from '../../pages/useTransformTool';

interface TextToolViewProps {
  title: string;
  textAction: TransformText;
}

function TextToolView({ title, textAction }: TextToolViewProps) {
  const { inputText, transformedText, error, onChangeText } =
    useTransformTool(textAction);

  return (
    <Center pos="fixed" w="100%" h="100%">
      <VStack maxW="100%" width="100%">
        <Heading>{title}</Heading>
        <Container maxW="90%">
          <FormControl>
            <FormLabel htmlFor="inputText">Input Text</FormLabel>
            <FormHelperText>Enter the text to change.</FormHelperText>

            <Textarea
              id="inputText"
              placeholder="Enter Text"
              minH="30ex"
              resize="vertical"
              value={inputText}
              onChange={onChangeText}
            />
          </FormControl>
        </Container>
        <ArrowDownIcon />
        <Container maxW="90%">
          <FormControl isInvalid={!!error}>
            <FormLabel htmlFor="transformedText">Transformed Text</FormLabel>
            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}

            <Textarea
              id="transformedText"
              minH="30ex"
              resize="vertical"
              value={transformedText}
              readOnly
            />
          </FormControl>
        </Container>
      </VStack>
    </Center>
  );
}

export default TextToolView;
