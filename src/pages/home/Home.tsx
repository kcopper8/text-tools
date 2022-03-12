import {
  Center,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

import allToolList from '../../allToolList';

function Home(): JSX.Element {
  return (
    <Center>
      <VStack mt="100px">
        <Heading>Text Tools</Heading>
        <UnorderedList>
          {allToolList.map(({ route, title }) => (
            <ListItem>
              <Link href={`./${route}`}>{title}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </Center>
  );
}

export default Home;
