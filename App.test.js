import React from 'react';
import { Text } from 'react-native';
import App from './App';
import { expect } from "chai";

import renderer from 'react-test-renderer';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {

    let app;

    beforeEach(() => {
        app = shallow(<App />)
    });

    test('renders as expected', () => {
        expect(app).to.have.length(1);
    });

    test('renders a list of two recipes', () => {
        const recipe1 = 'Biscuits and Gravy';
        const recipe2 = 'Tacos';

        expect(app.find(Text)).to.have.length(3);
    });
});