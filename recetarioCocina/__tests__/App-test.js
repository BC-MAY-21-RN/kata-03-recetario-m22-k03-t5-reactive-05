import 'react-native';
import {RecipeItem} from '../src/components/Recipe/RecipeItem';
import {RecipeList} from '../src/components/Recipe/RecipeList';
import React from 'react';
import renderer from 'react-test-renderer';
import recipes from '../db/data.json';

test('Demostrate the array is not empty', () => {
  expect(RecipeItem).not.toBeNull();
});
describe('Recipe', () => {
  it('RecipeItem component render', () => {
    const RenderedItem = renderer
      .create(<RecipeItem recipe={recipes[0]} category="Trending" trending />)
      .toJSON();
    expect(RenderedItem).toMatchSnapshot();
  });
  it('RecipeList Component Render', () => {
    const RenderedRecipeListItem = renderer
      .create(<RecipeList recipes={recipes} trending category="Trending" />)
      .toJSON();
    expect(RenderedRecipeListItem).toMatchSnapshot();
  });
});
