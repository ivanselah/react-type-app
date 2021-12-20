import React, { useState } from 'react';
import styled from 'styled-components';

interface DummyText {
  text: string;
  otherThing?: boolean;
}

function Dummy({ text, otherThing = false }: DummyText) {
  return <h1>{text}</h1>;
}

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Hello', value);
  };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  return (
    <Container>
      <H1>Hello</H1>
      <Dummy text="Hello" />
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
      <button onClick={onClick}>Click Me</button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
