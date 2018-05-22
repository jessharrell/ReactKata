import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {

    let app;

    beforeEach(() => {
        app = shallow(<App />)
    });

    test('renders as expected', () => {
        expect(app).toBeTruthy()
    })
});