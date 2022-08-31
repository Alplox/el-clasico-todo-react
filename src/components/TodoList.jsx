import {
  VStack,
  HStack,
  Text,
  IconButton,
  Badge,
  StackDivider,
  Spacer,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No tienes tareas activas :D
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<DeleteIcon />}
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
