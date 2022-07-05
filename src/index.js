import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './views/login/login';
import {Home} from './views/home/home';
import {Map} from './views/map/map';
import {MapDos} from './views/map/map2';
import {Collection} from './views/collection/collection';
import {Profile} from './views/profile/profile';
import {pantallaPuntos} from './views/ScreenScore/screenScore';
import {
  FeddbackQuiz1False,
  FeddbackQuiz1True,
  FeddbackQuiz1TimeDefault,
  FeddbackQuiz2False,
  FeddbackQuiz2True,
  FeddbackQuiz2TimeDefault,
  FeddbackQuiz3False,
  FeddbackQuiz3True,
  FeddbackQuiz3TimeDefault,
  FeddbackQuiz4False,
  FeddbackQuiz4True,
  FeddbackQuiz4TimeDefault,
  FeddbackQuiz5False,
  FeddbackQuiz5True,
  FeddbackQuiz5TimeDefault,
  FeddbackQuiz6False,
  FeddbackQuiz6True,
  FeddbackQuiz6TimeDefault,
  FeddbackQuiz7False,
  FeddbackQuiz7True,
  FeddbackQuiz7TimeDefault,
  FeddbackQuiz8False,
  FeddbackQuiz8True,
  FeddbackQuiz8TimeDefault,
  FeddbackQuiz9False,
  FeddbackQuiz9True,
  FeddbackQuiz9TimeDefault,
  FeddbackQuiz10False,
  FeddbackQuiz10True,
  FeddbackQuiz10TimeDefault,
} from './views/Feedbacks/feedback';
import {Quiz} from './views/quiz/quiz';
import {Quiz2} from './views/quiz/quiz2';
import {Quiz3} from './views/quiz/quiz3';
import {Quiz4} from './views/quiz/quiz4';
import {Quiz5} from './views/quiz/quiz5';
import {Quiz6} from './views/quiz/quiz6';
import {Quiz7} from './views/quiz/quiz7';
import {Quiz8} from './views/quiz/quiz8';
import {Quiz9} from './views/quiz/quiz9';
import {Quiz10} from './views/quiz/quiz10';
import {IndividualCollection} from './views/collection/individual-collection';
import {Room} from './views/rooms/room';
import {Puntos} from './views/Score/Score';
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />

      <Stack.Screen
        name="MapTow"
        component={MapDos}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndCol"
        component={IndividualCollection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="pantallaPuntos"
        component={pantallaPuntos}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Configuration" component={Profile} />
      <Stack.Screen
        name="feddbackUnoIncorrecto"
        component={FeddbackQuiz1False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackUnoCorrecto"
        component={FeddbackQuiz1True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackUnoTiempoAgotado"
        component={FeddbackQuiz1TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackDosIncorrecto"
        component={FeddbackQuiz2False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackDosCorrecto"
        component={FeddbackQuiz2True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackDosTiempoAgotado"
        component={FeddbackQuiz2TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackTresIncorrecto"
        component={FeddbackQuiz3False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackTresCorrecto"
        component={FeddbackQuiz3True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackTresTiempoAgotado"
        component={FeddbackQuiz3TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackCuatroIncorrecto"
        component={FeddbackQuiz4False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackCuatroCorrecto"
        component={FeddbackQuiz4True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackCuatroTiempoAgotado"
        component={FeddbackQuiz4TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackCincoIncorrecto"
        component={FeddbackQuiz5False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackCincoCorrecto"
        component={FeddbackQuiz5True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackCincoTiempoAgotado"
        component={FeddbackQuiz5TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackSeisIncorrecto"
        component={FeddbackQuiz6False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackSeisCorrecto"
        component={FeddbackQuiz6True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackSeisTiempoAgotado"
        component={FeddbackQuiz6TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackSieteIncorrecto"
        component={FeddbackQuiz7False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackSieteCorrecto"
        component={FeddbackQuiz7True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackSieteTiempoAgotado"
        component={FeddbackQuiz7TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackOchoIncorrecto"
        component={FeddbackQuiz8False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackOchoCorrecto"
        component={FeddbackQuiz8True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackOchoTiempoAgotado"
        component={FeddbackQuiz8TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackNueveIncorrecto"
        component={FeddbackQuiz9False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackNueveCorrecto"
        component={FeddbackQuiz9True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackNueveTiempoAgotado"
        component={FeddbackQuiz9TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="feddbackDiezIncorrecto"
        component={FeddbackQuiz10False}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackDiezCorrecto"
        component={FeddbackQuiz10True}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="feddbackDiezTiempoAgotado"
        component={FeddbackQuiz10TimeDefault}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz2"
        component={Quiz2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz3"
        component={Quiz3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz4"
        component={Quiz4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz5"
        component={Quiz5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz6"
        component={Quiz6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz7"
        component={Quiz7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz8"
        component={Quiz8}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz9"
        component={Quiz9}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz10"
        component={Quiz10}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Puntos"
        component={Puntos}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Room"
        options={{headerShown: false}}
        component={Room}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
