import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const RecipeTrendingItem = ({recipe}) => {
  return (
    <TouchableOpacity style={styles.recipeCardStyle} key={recipe.id}>
      <View>
        <Image
          source={{
            uri: recipe.img,
          }}
          style={styles.recipeImageTrending}
        />
        <Text style={styles.subtitle}>{recipe.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  recipeCardStyle: {
    marginRight: 10,
  },
  recipeImageTrending: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});
