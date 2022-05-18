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

import SearchBar from '../components/SearchBar/SearchBar';
import recipes from '../../db/data.json';
export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.viewContainer}>
        <Text style={styles.title}>TRENDING</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {recipes.map(recipe => (
            <View style={styles.recipeCardStyle}>
              <Image
                source={{
                  uri: recipe.img,
                }}
                style={{width: 150, height: 150}}
              />
              <Text style={styles.subtitle}>{recipe.title}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.title}>RECENT</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {recipes.map(recipe => (
            <View style={styles.recipeCardStyle}>
              <Image
                source={{
                  uri: recipe.img,
                }}
                style={{width: 200, height: 200}}
              />
              <Text style={styles.subtitle}>{recipe.title}</Text>
              <Button
                title="Go to Recipe screen"
                onPress={() => navigation.navigate('Recipe')}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 100,
    backgroundColor: '#2d3436',
  },
  title: {
    fontSize: 23,
    color: '#FF479C',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 15,
  },
  subtitle: {
    color: 'white',
    marginTop: 10,
  },
  scrollView: {
    width: '90%',
    padding: 10,
    marginRight: '5%',
    marginLeft: '5%',
  },
  recipeCardStyle: {
    marginRight: 10,
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
