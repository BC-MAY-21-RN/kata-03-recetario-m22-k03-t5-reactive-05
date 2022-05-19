import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RecipeItem} from './RecipeItem';

const RecipeList = ({recipes, trending}) => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      {recipes.map(recipe => (
        <RecipeItem recipe={recipe} key={recipe.id} trending={trending} />
      ))}
    </ScrollView>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  scrollView: {
    width: '90%',
    padding: 10,
    marginRight: '5%',
    marginLeft: '5%',
  },
});
