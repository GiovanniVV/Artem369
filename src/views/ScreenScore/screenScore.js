import {useState} from 'react';
import {View, Text, SafeAreaView, styles, ImageBackground} from 'react-native';
import React from 'react';
import Fondo from '../../assets/media/fondo.svg';
import {StyleSheet} from 'react-native';

export const pantallaPuntos = () => {
  return (
    <View style={HomeStyles.backgroudImage2}>
      <Fondo width={'865px'} height={'400px'} />
    </View>
  );
};

export const HomeStyles = StyleSheet.create({
  backgroudImage2: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -2,
  },
});
