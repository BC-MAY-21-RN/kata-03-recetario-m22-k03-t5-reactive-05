import React from 'react';
import {Button, View, Text} from 'react-native';

export const RecipeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Recipe Screen</Text>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
