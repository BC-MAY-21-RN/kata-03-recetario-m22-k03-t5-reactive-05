import React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>TRENDING</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
          />
          <Button
            title="Go to Recipe screen"
            onPress={() => navigation.navigate('Recipe')}
          />
        </ScrollView>
        <Text style={styles.title}>RECENT</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Button
            title="Go to Recipe screen"
            onPress={() => navigation.navigate('Recipe')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2d3436',
  },
  title: {
    fontSize: 23,
    color: '#FF479C',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 15,
  },
  scrollView: {
    width: '90%',
    padding: 30,
    marginRight: '5%',
    marginLeft: '5%',
    backgroundColor: '#222f3e',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
