import React from 'react';
import { Text, FlatList } from 'react-native';
import { expect } from "chai";

import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import RecipeDetail from "../screens/RecipeDetail";

Enzyme.configure({adapter: new Adapter()});

describe('RecipeDetail', () => {

    let recipeDetail;

    beforeEach(() => {
        recipeDetail = shallow(<RecipeDetail />)
    });

    test('renders as expected', () => {
        expect(recipeDetail).to.have.length(1);
    });

    test('renders a recipe name and average rating', () => {
        expect(recipeDetail.find(Text)).to.have.length(2);
    });

    test('renders a list of individual ratings', () => {
        expect(recipeDetail.find(FlatList)).to.have.length(1);
    });

    test('should have the title text it was given', () => {
        const expectedRecipeName = 'Recipe Name';
        expect(recipeDetail.find('.recipeName').dive().text().trim()).to.eql(expectedRecipeName);
    });

    test('should have the average rating it was given', () => {
        const expectedAverageRating = 'Recipe Average Rating';
        expect(recipeDetail.find('.recipeAverageRating').dive().text().trim()).to.eql(expectedAverageRating);
    });

    test('should have the list of ratings it was given', () => {
        let ratings = recipeDetail.find('.recipeRatings');
        expect(ratings.length).to.eql(1);
    });
});