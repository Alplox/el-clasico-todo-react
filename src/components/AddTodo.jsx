import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No contenido detectado',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return; /* este return evita que se siga con el resto del codigo */
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='Añade tu tarea aquí'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Añadir tarea
        </Button>
      </HStack>
    </form>
  );
}
