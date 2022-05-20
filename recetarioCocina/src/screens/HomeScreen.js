import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import SearchBar from '../components/SearchBar/SearchBar';
import recipes from '../../db/data.json';
import RecipeList from '../components/Recipe/RecipeList';
export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.viewContainer}>
        <Text style={styles.title}>TRENDING</Text>
        <RecipeList
          recipes={recipes}
          trending
          navigation={navigation}
          category="Trending"
        />
        <Text style={styles.title}>RECENT</Text>
        <RecipeList
          recipes={recipes}
          navigation={navigation}
          category="Recent"
        />
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
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeImageRecent: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  recipeImageTrending: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});
