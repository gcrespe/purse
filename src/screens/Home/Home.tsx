import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}: any) => {
  return (
    <View style={styles.viewLogin}>
      <StatusBar translucent backgroundColor={'#0b1c04'} />
        <View style={{width: width, height: height/6, borderBottomColor: '#d6fcb8', borderBottomWidth: 1, flex: 1, flexDirection: 'row', justifyContent: "space-evenly"}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              width: width * 0.3,
              height: height * 0.05,
              backgroundColor: '#0b1c04',
              borderWidth: 1,
              borderColor: '#d6fcb8',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop: height * 0.1,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#d6fcb8', fontWeight: '800', fontSize: 18}}>
              Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              width: width * 0.3,
              height: height * 0.05,
              backgroundColor: '#0b1c04',
              borderWidth: 1,
              borderColor: '#d6fcb8',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop: height * 0.1,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#d6fcb8', fontWeight: '800', fontSize: 18}}>
              Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              width: width * 0.3,
              height: height * 0.05,
              backgroundColor: '#0b1c04',
              borderWidth: 1,
              borderColor: '#d6fcb8',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop: height * 0.1,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#d6fcb8', fontWeight: '800', fontSize: 18}}>
              Entrar
          </Text>
        </TouchableOpacity>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  viewLogin: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b1c04',
    height: height,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: height * 0.03,
  },
  normalText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: height * 0.03,
    textAlign: 'center',
  },
});

export default Home;
