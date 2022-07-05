import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

export const FeddbackQuiz1False = ({navigation}) => {
  const [stateQuestion, setQuestion] = useState(false);
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz2');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>
          {stateQuestion ? 'Correcto' : 'Incorrecto'}
        </Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El díptico de los Duques de Urbino es una de las obras más famosas
            del Renacimiento Italiano. Dibujado por el gran artista Piero della
            Francesca, retrata a los conyugues Federigo da Montefeltro y
            Battista Sforza. El Duque, líder de mercenarios, grande estratega y
            gran mecenas, se convirtió en un refinado y célebre centro cultural.
            Fue en ese ambiente que Piero della Francesca realizó estas dos
            obras maestras entre 1465 y 1472.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz1True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz2');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>{}</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El díptico de los Duques de Urbino es una de las obras más famosas
            del Renacimiento Italiano. Dibujado por el gran artista Piero della
            Francesca, retrata a los conyugues Federigo da Montefeltro y
            Battista Sforza. El Duque, líder de mercenarios, grande estratega y
            gran mecenas, se convirtió en un refinado y célebre centro cultural.
            Fue en ese ambiente que Piero della Francesca realizó estas dos
            obras maestras entre 1465 y 1472.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz1TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz2');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El díptico de los Duques de Urbino es una de las obras más famosas
            del Renacimiento Italiano. Dibujado por el gran artista Piero della
            Francesca, retrata a los conyugues Federigo da Montefeltro y
            Battista Sforza. El Duque, líder de mercenarios, grande estratega y
            gran mecenas, se convirtió en un refinado y célebre centro cultural.
            Fue en ese ambiente que Piero della Francesca realizó estas dos
            obras maestras entre 1465 y 1472.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz2False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz3');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            En 1401, los mercaderes convocaron a los artistas a un concurso para
            realizar la puerta norte. A todos se les dio el mismo tema para
            participar en el concurso; el tema era la representación de la
            historia del viejo testamento del Sacrificio de Isaac en manos de su
            padre Abraham, justo en el momento en que el ángel enviado por Yahvé
            lo detiene y así evita el holocausto. La escena debía quedar
            encuadrada en una orla igual a las que había empleado Pisano en la
            puerta sur. De los siete artistas participantes, al final quedaron
            sólo dos: Lorenzo Ghiberti y Fillippo Brunelleschi. Ambos
            presentaron unos relieves impecables, pero el jurado se decantó por
            el diseño de Ghiberti, al cual consideraron, no sin razón, como el
            mejor de los dos. Ghiberti inició los trabajos de la puerta ese
            mismo año y los concluyó veinte años más tarde, en 1424.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz2True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz3');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            En 1401, los mercaderes convocaron a los artistas a un concurso para
            realizar la puerta norte. A todos se les dio el mismo tema para
            participar en el concurso; el tema era la representación de la
            historia del viejo testamento del Sacrificio de Isaac en manos de su
            padre Abraham, justo en el momento en que el ángel enviado por Yahvé
            lo detiene y así evita el holocausto. La escena debía quedar
            encuadrada en una orla igual a las que había empleado Pisano en la
            puerta sur. De los siete artistas participantes, al final quedaron
            sólo dos: Lorenzo Ghiberti y Fillippo Brunelleschi. Ambos
            presentaron unos relieves impecables, pero el jurado se decantó por
            el diseño de Ghiberti, al cual consideraron, no sin razón, como el
            mejor de los dos. Ghiberti inició los trabajos de la puerta ese
            mismo año y los concluyó veinte años más tarde, en 1424.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz2TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz3');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            En 1401, los mercaderes convocaron a los artistas a un concurso para
            realizar la puerta norte. A todos se les dio el mismo tema para
            participar en el concurso; el tema era la representación de la
            historia del viejo testamento del Sacrificio de Isaac en manos de su
            padre Abraham, justo en el momento en que el ángel enviado por Yahvé
            lo detiene y así evita el holocausto. La escena debía quedar
            encuadrada en una orla igual a las que había empleado Pisano en la
            puerta sur. De los siete artistas participantes, al final quedaron
            sólo dos: Lorenzo Ghiberti y Fillippo Brunelleschi. Ambos
            presentaron unos relieves impecables, pero el jurado se decantó por
            el diseño de Ghiberti, al cual consideraron, no sin razón, como el
            mejor de los dos. Ghiberti inició los trabajos de la puerta ese
            mismo año y los concluyó veinte años más tarde, en 1424.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz3False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz4');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Virgen de la Humildad es un cuadro del pintor florentino Fra
            Angelico pintado ya en plena madurez del artista entre el 1433 y
            1435, y expuesto actualmente en el Museo Nacional de Arte de
            Cataluña, cedido en depósito por el Museo Thyssen-Bornemisza, con
            sede en Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz3True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz4');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Virgen de la Humildad es un cuadro del pintor florentino Fra
            Angelico pintado ya en plena madurez del artista entre el 1433 y
            1435, y expuesto actualmente en el Museo Nacional de Arte de
            Cataluña, cedido en depósito por el Museo Thyssen-Bornemisza, con
            sede en Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz3TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz4');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Virgen de la Humildad es un cuadro del pintor florentino Fra
            Angelico pintado ya en plena madurez del artista entre el 1433 y
            1435, y expuesto actualmente en el Museo Nacional de Arte de
            Cataluña, cedido en depósito por el Museo Thyssen-Bornemisza, con
            sede en Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz4False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz5');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El cuadro El nacimiento de Venus o La nascita di Venere de Sandro
            Botticelli fue pintado entre los años 1482 y 1485, en pleno contexto
            histórico del Renacimiento. Se trata del primer cuadro en tela
            pintado en Tuscania, Italia. La obra mide aproximadamente 1,80
            metros de alto y 2,75 metros de largo y se encuentra actualmente en
            el Museo Uffizi en Florencia, Italia
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz4True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz5');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El cuadro El nacimiento de Venus o La nascita di Venere de Sandro
            Botticelli fue pintado entre los años 1482 y 1485, en pleno contexto
            histórico del Renacimiento. Se trata del primer cuadro en tela
            pintado en Tuscania, Italia. La obra mide aproximadamente 1,80
            metros de alto y 2,75 metros de largo y se encuentra actualmente en
            el Museo Uffizi en Florencia, Italia
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz4TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz5');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El cuadro El nacimiento de Venus o La nascita di Venere de Sandro
            Botticelli fue pintado entre los años 1482 y 1485, en pleno contexto
            histórico del Renacimiento. Se trata del primer cuadro en tela
            pintado en Tuscania, Italia. La obra mide aproximadamente 1,80
            metros de alto y 2,75 metros de largo y se encuentra actualmente en
            el Museo Uffizi en Florencia, Italia
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz5False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz6');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Gioconda o Mona Lisa es uno de los retratos más emblemáticos de
            la historia de la pintura, pintado en el siglo XVI o Cinqueccento.
            El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo, más
            conocido como La Gioconda o La Mona Lisa, es una obra pictórica del
            polímata renacentista italiano Leonardo da Vinci. Fue adquirida por
            el rey Francisco I de Francia a comienzos del siglo XVI y desde
            entonces es propiedad del Estado francés, para finalmente formar
            parte de las obras de Arte exhibidas en el Museo del Louvre.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz5True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz6');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Gioconda o Mona Lisa es uno de los retratos más emblemáticos de
            la historia de la pintura, pintado en el siglo XVI o Cinqueccento.
            El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo, más
            conocido como La Gioconda o La Mona Lisa, es una obra pictórica del
            polímata renacentista italiano Leonardo da Vinci. Fue adquirida por
            el rey Francisco I de Francia a comienzos del siglo XVI y desde
            entonces es propiedad del Estado francés, para finalmente formar
            parte de las obras de Arte exhibidas en el Museo del Louvre.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz5TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        {' '}
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz6');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Gioconda o Mona Lisa es uno de los retratos más emblemáticos de
            la historia de la pintura, pintado en el siglo XVI o Cinqueccento.
            El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo, más
            conocido como La Gioconda o La Mona Lisa, es una obra pictórica del
            polímata renacentista italiano Leonardo da Vinci. Fue adquirida por
            el rey Francisco I de Francia a comienzos del siglo XVI y desde
            entonces es propiedad del Estado francés, para finalmente formar
            parte de las obras de Arte exhibidas en el Museo del Louvre.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz6False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz7');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Palas y el Centauro, conocida en italiano como Pallade che doma il
            centauro, es un cuadro realizado al temple sobre tela de 207
            centímetros de alto y 148 cm de ancho, realizado entre el año 1482 y
            1483 por el pintor italiano Sandro Botticelli por encargo de Lorenzo
            di Pierfrancesco de Médici. Se conserva en la Galería de los Uffizi
            de Florencia. Puesto que el nombre latino de Palas Atenea es
            Minerva, el cuadro es conocido también como Minerva y el centauro.
            Forma parte de las obras profanas que Botticelli pintó en los años
            1480 (Quattrocento).
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz6True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz7');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Palas y el Centauro, conocida en italiano como Pallade che doma il
            centauro, es un cuadro realizado al temple sobre tela de 207
            centímetros de alto y 148 cm de ancho, realizado entre el año 1482 y
            1483 por el pintor italiano Sandro Botticelli por encargo de Lorenzo
            di Pierfrancesco de Médici. Se conserva en la Galería de los Uffizi
            de Florencia. Puesto que el nombre latino de Palas Atenea es
            Minerva, el cuadro es conocido también como Minerva y el centauro.
            Forma parte de las obras profanas que Botticelli pintó en los años
            1480 (Quattrocento).
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz6TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz7');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Palas y el Centauro, conocida en italiano como Pallade che doma il
            centauro, es un cuadro realizado al temple sobre tela de 207
            centímetros de alto y 148 cm de ancho, realizado entre el año 1482 y
            1483 por el pintor italiano Sandro Botticelli por encargo de Lorenzo
            di Pierfrancesco de Médici. Se conserva en la Galería de los Uffizi
            de Florencia. Puesto que el nombre latino de Palas Atenea es
            Minerva, el cuadro es conocido también como Minerva y el centauro.
            Forma parte de las obras profanas que Botticelli pintó en los años
            1480 (Quattrocento).
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz7False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz8');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Retrato de una joven, generalmente conocido como La Fornarina, es
            una de las obras más representativas del pintor renacentista
            italiano Rafael Sanzio (1483-1520). Para su realización, posó la
            modelo romana y amante del artista Margherita Luti (c. 1493-1522),1
            hija del panadero (en italiano, fornaio) Francesco Luti di Siena,
            quien ya aparece en otras composiciones del autor, especialmente
            entre 1510 y 1517. Está pintado al óleo sobre tabla y sus
            dimensiones son de 85 x 60 cm.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz7True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz8');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Retrato de una joven, generalmente conocido como La Fornarina, es
            una de las obras más representativas del pintor renacentista
            italiano Rafael Sanzio (1483-1520). Para su realización, posó la
            modelo romana y amante del artista Margherita Luti (c. 1493-1522),1
            hija del panadero (en italiano, fornaio) Francesco Luti di Siena,
            quien ya aparece en otras composiciones del autor, especialmente
            entre 1510 y 1517. Está pintado al óleo sobre tabla y sus
            dimensiones son de 85 x 60 cm.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz7TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz8');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            Retrato de una joven, generalmente conocido como La Fornarina, es
            una de las obras más representativas del pintor renacentista
            italiano Rafael Sanzio (1483-1520). Para su realización, posó la
            modelo romana y amante del artista Margherita Luti (c. 1493-1522),1
            hija del panadero (en italiano, fornaio) Francesco Luti di Siena,
            quien ya aparece en otras composiciones del autor, especialmente
            entre 1510 y 1517. Está pintado al óleo sobre tabla y sus
            dimensiones son de 85 x 60 cm.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz8False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz9');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Anunciación es un retablo realizado por el pintor toscano del
            Renacimiento Fra Angélico, sobrenombre de Guido di Pietro da Mugello
            (1400- 1455). Está realizado en oro y temple sobre tabla, y (según
            las últimas investigaciones) fue pintado hacia 1425-1426 (antes se
            databa hacia 1430- 1432). Consta de una escena principal, con el
            tema de la Anunciación a la Virgen María, y de una predela o banco
            con cinco pequeñas escenas más. El conjunto mide 194 cm de ancho y
            194 cm de alto.1 Se exhibe actualmente en el Museo del Prado de
            Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz8True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz9');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Anunciación es un retablo realizado por el pintor toscano del
            Renacimiento Fra Angélico, sobrenombre de Guido di Pietro da Mugello
            (1400- 1455). Está realizado en oro y temple sobre tabla, y (según
            las últimas investigaciones) fue pintado hacia 1425-1426 (antes se
            databa hacia 1430- 1432). Consta de una escena principal, con el
            tema de la Anunciación a la Virgen María, y de una predela o banco
            con cinco pequeñas escenas más. El conjunto mide 194 cm de ancho y
            194 cm de alto.1 Se exhibe actualmente en el Museo del Prado de
            Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz8TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz9');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La Anunciación es un retablo realizado por el pintor toscano del
            Renacimiento Fra Angélico, sobrenombre de Guido di Pietro da Mugello
            (1400- 1455). Está realizado en oro y temple sobre tabla, y (según
            las últimas investigaciones) fue pintado hacia 1425-1426 (antes se
            databa hacia 1430- 1432). Consta de una escena principal, con el
            tema de la Anunciación a la Virgen María, y de una predela o banco
            con cinco pequeñas escenas más. El conjunto mide 194 cm de ancho y
            194 cm de alto.1 Se exhibe actualmente en el Museo del Prado de
            Madrid.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz9False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz10');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La cúpula de Santa María del Fiore o cúpula de Santa María de la
            Flor, también conocida como cúpula de Brunelleschi o cúpula del
            Duomo de Florencia, constituye la cubierta del crucero de la
            catedral de Santa María del Fiore de Florencia. Fue la cúpula más
            grande del mundo tras la caída del Imperio romano1 y se considera
            todavía la mayor jamás realizada en albañilería. Fue ideada,
            proyectada y construida por Filippo Brunelleschi, quien inició con
            esta obra el Renacimiento italiano y florentino en arquitectura.
            Está considerada como la construcción más importante edificada en
            Europa desde la época romana, debido a la relevancia fundamental que
            ha desempeñado para el desarrollo posterior de la arquitectura y de
            la concepción moderna de la construcción. • Las obras del actual
            edificio de la catedral de Santa María del Fiore se iniciaron entre
            los años 1294 y 1295 para sustituir a la antigua iglesia de Santa
            Reparata, de dimensiones más pequeñas. Entre 1410 y 1413 se
            construyó el tambor,1quedando finalizada su base superior entre 1414
            y 1415. Sin embargo, a principios del siglo XV todavía no se había
            planteado en profundidad el problema de la cubierta, cuya
            edificación preocupaba a los miembros de la Opera del Duomo desde
            hacía tiempo.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz9True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz10');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La cúpula de Santa María del Fiore o cúpula de Santa María de la
            Flor, también conocida como cúpula de Brunelleschi o cúpula del
            Duomo de Florencia, constituye la cubierta del crucero de la
            catedral de Santa María del Fiore de Florencia. Fue la cúpula más
            grande del mundo tras la caída del Imperio romano1 y se considera
            todavía la mayor jamás realizada en albañilería. Fue ideada,
            proyectada y construida por Filippo Brunelleschi, quien inició con
            esta obra el Renacimiento italiano y florentino en arquitectura.
            Está considerada como la construcción más importante edificada en
            Europa desde la época romana, debido a la relevancia fundamental que
            ha desempeñado para el desarrollo posterior de la arquitectura y de
            la concepción moderna de la construcción. • Las obras del actual
            edificio de la catedral de Santa María del Fiore se iniciaron entre
            los años 1294 y 1295 para sustituir a la antigua iglesia de Santa
            Reparata, de dimensiones más pequeñas. Entre 1410 y 1413 se
            construyó el tambor,1quedando finalizada su base superior entre 1414
            y 1415. Sin embargo, a principios del siglo XV todavía no se había
            planteado en profundidad el problema de la cubierta, cuya
            edificación preocupaba a los miembros de la Opera del Duomo desde
            hacía tiempo.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz9TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Quiz10');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            La cúpula de Santa María del Fiore o cúpula de Santa María de la
            Flor, también conocida como cúpula de Brunelleschi o cúpula del
            Duomo de Florencia, constituye la cubierta del crucero de la
            catedral de Santa María del Fiore de Florencia. Fue la cúpula más
            grande del mundo tras la caída del Imperio romano1 y se considera
            todavía la mayor jamás realizada en albañilería. Fue ideada,
            proyectada y construida por Filippo Brunelleschi, quien inició con
            esta obra el Renacimiento italiano y florentino en arquitectura.
            Está considerada como la construcción más importante edificada en
            Europa desde la época romana, debido a la relevancia fundamental que
            ha desempeñado para el desarrollo posterior de la arquitectura y de
            la concepción moderna de la construcción. • Las obras del actual
            edificio de la catedral de Santa María del Fiore se iniciaron entre
            los años 1294 y 1295 para sustituir a la antigua iglesia de Santa
            Reparata, de dimensiones más pequeñas. Entre 1410 y 1413 se
            construyó el tambor,1quedando finalizada su base superior entre 1414
            y 1415. Sin embargo, a principios del siglo XV todavía no se había
            planteado en profundidad el problema de la cubierta, cuya
            edificación preocupaba a los miembros de la Opera del Duomo desde
            hacía tiempo.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz10False = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Map');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseIncorrect}>Incorrecto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El nacimiento de Venus es un cuadro realizado por el pintor
            renacentista Sandro Botticelli, una de las obras cumbre del maestro
            florentino y del Quattrocento italiano. Está ejecutado al temple
            sobre lienzo y mide 278,5 cm de ancho por 172,5 cm de alto. Se
            conserva en la Galería Uffizi, en Florencia, donde está expuesto en
            la sala 10-14, llamada «de Botticelli» (Inv. 1890 n. 878). Este
            cuadro fue en su tiempo una obra revolucionaria por cuanto
            presentaba sin tapujos un desnudo no justificado por ningún
            componente religioso, así como un tema mitológico procedente de la
            cultura clásica grecorromana anterior al cristianismo, lo que
            suponía la plena aceptación — al menos por parte de las élites
            culturales— del nuevo humanismo renacentista alejado del
            oscurantismo medieval.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz10True = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Map');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseCorrect}>Correcto</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El nacimiento de Venus es un cuadro realizado por el pintor
            renacentista Sandro Botticelli, una de las obras cumbre del maestro
            florentino y del Quattrocento italiano. Está ejecutado al temple
            sobre lienzo y mide 278,5 cm de ancho por 172,5 cm de alto. Se
            conserva en la Galería Uffizi, en Florencia, donde está expuesto en
            la sala 10-14, llamada «de Botticelli» (Inv. 1890 n. 878). Este
            cuadro fue en su tiempo una obra revolucionaria por cuanto
            presentaba sin tapujos un desnudo no justificado por ningún
            componente religioso, así como un tema mitológico procedente de la
            cultura clásica grecorromana anterior al cristianismo, lo que
            suponía la plena aceptación — al menos por parte de las élites
            culturales— del nuevo humanismo renacentista alejado del
            oscurantismo medieval.
          </Text>
        </ScrollView>
      </View>
    )
  );
};

export const FeddbackQuiz10TimeDefault = ({navigation}) => {
  return (
    StatusBar.setHidden(true),
    (
      <View style={styles.information}>
        <View style={styles.iconArrow}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              color="white"
              size={40}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Map');
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.responseTimeDefault}>Tiempo Agotado</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>
            El nacimiento de Venus es un cuadro realizado por el pintor
            renacentista Sandro Botticelli, una de las obras cumbre del maestro
            florentino y del Quattrocento italiano. Está ejecutado al temple
            sobre lienzo y mide 278,5 cm de ancho por 172,5 cm de alto. Se
            conserva en la Galería Uffizi, en Florencia, donde está expuesto en
            la sala 10-14, llamada «de Botticelli» (Inv. 1890 n. 878). Este
            cuadro fue en su tiempo una obra revolucionaria por cuanto
            presentaba sin tapujos un desnudo no justificado por ningún
            componente religioso, así como un tema mitológico procedente de la
            cultura clásica grecorromana anterior al cristianismo, lo que
            suponía la plena aceptación — al menos por parte de las élites
            culturales— del nuevo humanismo renacentista alejado del
            oscurantismo medieval.
          </Text>
        </ScrollView>
      </View>
    )
  );
};
export const styles = StyleSheet.create({
  information: {
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 80,
  },
  responseCorrect: {
    color: '#adff2f',
    fontSize: 35,
    textAlign: 'center',
  },
  responseIncorrect: {
    color: '#dc143c',
    fontSize: 35,
    textAlign: 'center',
  },
  responseTimeDefault: {
    color: '#ffa500',
    fontSize: 35,
    textAlign: 'center',
  },
  infoText: {
    textAlign: 'justify',
    marginRight: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  iconArrow: {
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 20,
    alignItems: 'flex-end',
    top: 300,
  },
});
