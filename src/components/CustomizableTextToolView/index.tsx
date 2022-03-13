import { ChangeEventHandler, useState } from 'react';

import { ArrowDownIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Center,
  Code,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react';

interface CustomizableTextToolViewProps {
  title: string;
}

function toTransformFunction(
  functionBody: string
): (inputText: string) => string {
  const functionScriptText = `
    (function customTransformText(inputText) {
      ${functionBody}
    });
    `;
  // eslint-disable-next-line no-eval
  return eval(functionScriptText);
}
function CustomizableTextToolView({ title }: CustomizableTextToolViewProps) {
  const [customTransformFunctionBody, setCustomTransformFunctionBody] =
    useState('return inputText;');
  const [functionBodyError, setFunctionBodyError] = useState<null | string>(
    null
  );
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const [error, setError] = useState<Error | null>(null);

  const handleChangeCustomTransformFunctionBody: ChangeEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    const newFunctionBody = event.target.value;
    try {
      setTransformedText(toTransformFunction(newFunctionBody)(inputText));
      setFunctionBodyError(null);
    } catch (e) {
      setFunctionBodyError(String(e));
    }
    setCustomTransformFunctionBody(newFunctionBody);
  };

  const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const newInputText = event.target.value;
    setInputText(newInputText);
    try {
      setError(null);
      setTransformedText(
        toTransformFunction(customTransformFunctionBody)(newInputText)
      );
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
          <FormControl isInvalid={!!functionBodyError}>
            <FormLabel htmlFor="custom_logic">Custom Logic</FormLabel>
            {functionBodyError && (
              <FormErrorMessage>{functionBodyError}</FormErrorMessage>
            )}
            {!functionBodyError && (
              <FormHelperText>Enter Logic as a function:</FormHelperText>
            )}

            <FormHelperText>
              <Code>function(inputText) {'{'}</Code>
            </FormHelperText>
            <Textarea
              id="custom_logic"
              placeholder="Enter Text"
              minH="10ex"
              resize="vertical"
              value={customTransformFunctionBody}
              onChange={handleChangeCustomTransformFunctionBody}
            />
            <FormHelperText>
              <Code>{'}'}</Code>
            </FormHelperText>
          </FormControl>
        </Container>
        <ArrowDownIcon />
        <Container maxW="90%">
          <HStack>
            <FormControl>
              <FormLabel htmlFor="inputText">Input Text</FormLabel>
              <FormHelperText>Enter the text to change.</FormHelperText>
              <Textarea
                id="inputText"
                minH="30ex"
                resize="vertical"
                value={inputText}
                onChange={onChangeText}
              />
            </FormControl>
            <ArrowRightIcon />
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
          </HStack>
        </Container>
      </VStack>
    </Center>
  );
}

export default CustomizableTextToolView;
