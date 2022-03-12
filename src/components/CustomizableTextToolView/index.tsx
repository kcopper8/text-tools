import { ArrowDownIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Center,
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

import useTransformTool from '../../pages/useTransformTool';

interface CustomizableTextToolViewProps {
  title: string;
}
function CustomizableTextToolView({ title }: CustomizableTextToolViewProps) {
  const { inputText, transformedText, error, onChangeText } = useTransformTool(
    (s) => s
  );

  return (
    <Center pos="fixed" w="100%" h="100%">
      <VStack maxW="100%" width="100%">
        <Heading>{title}</Heading>
        <Container maxW="90%">
          <FormControl>
            <FormLabel htmlFor="custom_logic">Custom Logic</FormLabel>
            <FormHelperText>Enter Logic as a function</FormHelperText>
            <Textarea
              id="custom_logic"
              placeholder="Enter Text"
              minH="10ex"
              resize="vertical"
            />
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
