import React from 'react';
import {View, Animated} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {QuizStyles} from './styles/quiz-styles';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

export const Quiz3 = ({navigation}) => {
  return (
    <View style={QuizStyles.backgroudImage}>
      <View style={QuizStyles.topUtils}>
        <View style={{zIndex: 1, top: 5}}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="black"
              size={50}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Map');
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', bottom: 30}}>
          <Text style={QuizStyles.question}>¿Cuál fue primero?</Text>
        </View>
        <View>
          <CountdownCircleTimer
            isPlaying
            duration={30}
            size={80}
            onComplete={() => [
              navigation.navigate('feddbackTresTiempoAgotado'),
            ]}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}>
            {({remainingTime, animatedColor}) => (
              <Animated.Text style={{color: animatedColor}}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '1%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('feddbackTresIncorrecto');
            }}>
            <View style={{width: '40%'}}>
              <AutoHeightImage
                width={350}
                style={{borderColor: '#B8874A', borderWidth: 5}}
                source={{
                  uri: 'https://i.imgur.com/8eMllHF.png',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('feddbackTresCorrecto');
            }}>
            <View style={{width: '30%', marginRight: 20}}>
              <AutoHeightImage
                style={{borderColor: '#B8874A', borderWidth: 5}}
                width={140}
                source={{
                  uri: 'https://i.imgur.com/OaynnDP.png',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
