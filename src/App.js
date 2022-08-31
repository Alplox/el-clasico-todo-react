import {
  Heading,
  Flex,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { FooterChoc } from './components/FooterChoc';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(localStorage.getItem('todos')) ||
      [] /* la funcion flecha es para que solo se solicite durante la primera carga */
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      p={4}
    >
      <IconButton
        aria-label='Alternar tema'
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb='8'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text' /* Esto hace que el gradient se aplique al texto */
      >
        Todolist - React/Chakra UI
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
      <FooterChoc />
    </Flex>
  );
}
