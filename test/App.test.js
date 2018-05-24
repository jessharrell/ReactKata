import React from 'react';
import { Text, FlatList } from 'react-native';
import App from '../App';
import { expect } from "chai";

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
});