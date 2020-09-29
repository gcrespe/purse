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

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}: any) => {
  return (
    <View style={styles.viewLogin}>
      <StatusBar translucent backgroundColor={'#0d0029'} />

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
  },
});

export default Home;
