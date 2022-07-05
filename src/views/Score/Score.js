import {useState} from 'react';
import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';

const usarContador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 20);
  return {
    contador,
    incrementar,
  };
};

export default function Puntos() {
  const {contador, incrementar} = usarContador();
  return (
    <Text style={{fontSize: 20, color: '#f0f8ff', top: -50, left: 40}}>
      {contador}
    </Text>
  );
}
