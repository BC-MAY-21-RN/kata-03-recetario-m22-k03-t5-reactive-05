import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RecipeItem} from './RecipeItem';
import {RecipeTrendingItem} from './RecipeTrendingItem';

const RecipeList = ({recipes, trending}) => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      {recipes.map(recipe =>
        trending ? (
          <RecipeItem recipe={recipe} key={recipe.id} />
        ) : (
          <RecipeTrendingItem recipe={recipe} key={recipe.id} />
        ),
      )}
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
