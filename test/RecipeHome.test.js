import React from 'react';
import { FlatList } from 'react-native';
import { expect } from "chai";

import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import RecipeHome from "../screens/RecipeHome";

Enzyme.configure({adapter: new Adapter()});

describe('RecipeHome', () => {

    let recipeHome;

    beforeEach(() => {
        recipeHome = shallow(<RecipeHome />)
    });

    test('renders as expected', () => {
        expect(recipeHome).to.have.length(1);
    });

    test('renders a list of two recipes', () => {
        expect(recipeHome.find(FlatList)).to.have.length(1);
    });

    test('something', () => {
        expect(1).to.eql(1);
    })
});