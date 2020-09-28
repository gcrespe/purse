import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LoginImg from '../../assets/img/loginscreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  return (
    <View style={styles.viewLogin}>
      <StatusBar translucent backgroundColor={'#0d0029'} />
      <View style={{marginTop: height * 0.1}}>
        <LoginImg width={width * 0.7} height={height * 0.3} />
      </View>
      <View style={{width: width * 0.7, marginTop: height * 0.05}}>
        <Text style={styles.titleText}>Bem vindo ao Purse</Text>
        <Text style={styles.normalText}>
          O aplicativo que pode ser organizado de qualquer forma, de acordo com
          o seu gosto, sem limites.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            width: width * 0.7,
            height: height * 0.05,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: height * 0.1,
            flexDirection: 'row',
          }}>
          <Text style={{color: '#0d0029', fontWeight: '800', fontSize: 18}}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: height * 0.05}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              fontStyle: 'normal',
              letterSpacing: 1.4,
            }}>
            Cadastrar
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
    backgroundColor: '#0d0029',
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
  },,
});

export default Login;
