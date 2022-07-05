import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, styles, ImageBackground} from 'react-native';
import Fondo from '../../assets/media/fondo.svg';
import FondoBl from '../../assets/Profile/fondoBl.svg';
import Trofeo from '../../assets/Profile/trofeo.svg';
import {StyleSheet} from 'react-native';
import {Avatar, Image, Icon} from 'react-native-elements';
import Score from '../../assets/media/score.svg';
import Paletas from '../../assets/media/paletas.svg';

export const Profile = () => {
  return (
    <View>
      <View style={HomeStyles.backgroudImage2}>
        <Fondo width={'865px'} height={'400px'} />
      </View>
      <View>
        <FondoBl left={30} top={100} position={'absolute'} />
        <Text style={HomeStyles.textProfile}>Jaime Enrique</Text>
      </View>
      <View>
        <Trofeo left={290} top={-10} position={'absolute'} />
      </View>
      <View>
        <Score left={120} top={170} position={'absolute'} />
      </View>
      <View>
        <Paletas left={120} top={230} position={'absolute'} />
      </View>
      <View padding={20} top={88} left={25} position={'absolute'}>
        <Avatar
          size={75}
          rounded
          source={{
            uri: 'https://www.holland.com/upload_mm/2/5/2/56781_fullimage_vincent_van_gogh.jpg',
          }}
        />
      </View>
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
  textProfile: {
    fontSize: 25,
    top: 130,
    left: 140,
  },
});
