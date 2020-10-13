import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  FlatList,
  Text
} from 'react-native';

import {Check} from '../../components/checkbox/index'

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}: any) => {

  const [check, setCheck] = useState<boolean>(false)
  const [check2, setCheck2] = useState<boolean>(false)
  const [check3, setCheck3] = useState<boolean>(false)
  const [check4, setCheck4] = useState<boolean>(false)
  const [check5, setCheck5] = useState<boolean>(false)
  const [check6, setCheck6] = useState<boolean>(false)
  const [check7, setCheck7] = useState<boolean>(false)
  const [check8, setCheck8] = useState<boolean>(false)

  const papeis: string[] = ['hehehe', 'hihihih', 'hohoho', 'huhuhu', 'hahaha', 'ridsod', 'chablau', 'xcablas', 'ufscar']

  let papeisSelecionados: string[] = Array(8).fill('');

  useEffect(() => {
    if(check){
      papeisSelecionados[0] = papeis[0]
    } else papeisSelecionados[0] = ''
    if(check2){
      papeisSelecionados[1] = papeis[1]
    } else papeisSelecionados[1] = ''
    if(check3){
      papeisSelecionados[2] = papeis[2]
    } else papeisSelecionados[2] = ''
    if(check4){
      papeisSelecionados[3] = papeis[3]
    } else papeisSelecionados[3] = ''
    if(check5){
      papeisSelecionados[4] = papeis[4]
    } else papeisSelecionados[4] = ''
    if(check6){
      papeisSelecionados[5] = papeis[5]
    }else papeisSelecionados[5] = ''
    if(check7){
      papeisSelecionados[6] = papeis[6]
    }else papeisSelecionados[6] = ''
    if(check8){
      papeisSelecionados[7] = papeis[7]
    }else papeisSelecionados[7] = ''

    console.log(papeisSelecionados)

    const arrayFinal: string[] = Array.from(papeisSelecionados).filter(function(el){
      if(el != '') return el;
    })

    console.log(arrayFinal)

  }, [check, check2, check3, check4, check5, check6, check7, check8])

  return (
    <View style={styles.viewLogin}>
      <StatusBar translucent backgroundColor={'#FFFFFF'} />
        <View style={{width: width*0.8, height: height, borderBottomColor: '#d6fcb8', marginTop: 100, flexDirection: "row", justifyContent: "space-evenly", padding: 15}}>
          <View> 
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", alignItems: 'center'}}>
              <Check
                  value={check}
                  setValue={() => setCheck(!check)}
                  style={{width: 10, height: 10}}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[0]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check2}
                  setValue={() => setCheck2(!check2)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[1]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check3}
                  setValue={() => setCheck3(!check3)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[2]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check4}
                  setValue={() => setCheck4(!check4)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[3]}
              </Text>
            </View>
          </View>
          <View> 
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check5}
                  setValue={() => setCheck5(!check5)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[4]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check6}
                  setValue={() => setCheck6(!check6)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[5]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check7}
                  setValue={() => setCheck7(!check7)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[6]}
              </Text>
            </View>
            <View style={{flexDirection: "column", width: 50, height: 50, alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
              <Check
                  value={check8}
                  setValue={() => setCheck8(!check8)}
              />
              <Text
                  style={{
                      fontSize: 10,
                      color: '#000000',
                      textAlign: 'center'
                  }}>
                  {papeis[7]}
              </Text>
            </View>
          </View>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  viewLogin: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
