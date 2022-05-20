import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {RecipeItem} from './RecipeItem';

const RecipeList = ({recipes, trending, navigation, category}) => {
  return (
    <FlatList
      style={styles.scrollView}
      horizontal
      data={recipes}
      renderItem={({item}) => (
        <RecipeItem
          recipe={item}
          key={item.id}
          trending={trending}
          navigation={navigation}
          category={category}
        />
      )}
    />
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
