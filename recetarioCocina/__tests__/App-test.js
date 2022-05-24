import 'react-native';
import {RecipeItem} from '../src/components/Recipe/RecipeItem';
import React from 'react';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';

test('Demostrate the array is not empty', () => {
  expect(RecipeItem).not.toBeNull();
});

it('Image', () => {
  const RecipeItem = renderer.create(<Image />).toJSON();
  expect(RecipeItem).toMatchSnapshot();
});

/*
test('the flavor list contains lime', () => {
  expect(['lime', 'mangle']).toContain('lime');
});

it('with component', () => {
  const props = {
      component: () => {},
    },
    ModalWrapperComponent = RecipeItem(<TouchableOpacity {...props} />);
  expect(ModalWrapperComponent).toMatchSnapshot();
});
test('the flavor list contains lime', () => {
  expect("lime juice").toContain('lime');
}); */