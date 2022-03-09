import {
  Center,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

function Home(): JSX.Element {
  return (
    <Center>
      <VStack mt="100px">
        <Heading>Text Tools</Heading>
        <UnorderedList>
          <ListItem>
            <Link href="./nl2br">nl2br</Link>
          </ListItem>

          <ListItem>
            <Link href="./inlineStyle2ReactStyle">inlineStyle2ReactStyle</Link>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Center>
  );
}

export default Home;
