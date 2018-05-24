import React from 'react';
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

    // test('renders a recipe name', () => {
    //     expect(recipeDetail.find(FlatList)).to.have.length(1);
    // });
});