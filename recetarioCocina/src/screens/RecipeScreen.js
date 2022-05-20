import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {RecipeBanner} from '../components/Recipe/RecipeBanner';
export const RecipeScreen = ({route, navigation}) => {
  const title = route.params.recipe.title;
  const image = route.params.recipe.img;
  const ingredients = route.params.recipe.ingredients;
  const renderItem = ({item}) => (
    <View style={styles.ingredientItemStyle}>
      <Text key={item.id} style={styles.subtitle}>
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.viewContainer}>
      <RecipeBanner image={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <FlatList
        style={styles.recipeInfo}
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
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
    fontSize: 30,
    color: '#FF479C',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 10,
    marginBottom: 15,
  },
  subtitle: {
    color: 'white',
    marginTop: 10,
    paddingLeft: 10,
    textTransform: 'capitalize',
  },
  recipeCardStyle: {
    marginRight: 10,
  },
  recipeImage: {
    width: '100%',
    height: 300,
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
  },
  ingredientItemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderStyle: 'solid',
    paddingVertical: 10,
  },
  recipeInfo: {},
});
