import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
export const RecipeItem = ({recipe, trending}) => {
  return (
    <TouchableOpacity style={styles.recipeCardStyle} key={recipe.id}>
      <View>
        <Image
          source={{
            uri: recipe.img,
          }}
          style={[
            styles.recipeImageTrending,
            trending ? null : styles.imageSizeRecent,
          ]}
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
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  imageSizeRecent: {
    width: 200,
    height: 200,
  },
});
