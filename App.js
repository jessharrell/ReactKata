import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import RecipeHome from "./screens/RecipeHome";

export default class App extends React.Component {

    render() {
        return <RootStack/>
    }
}

const RootStack = createStackNavigator(
    {
        RecipeHome: RecipeHome
    },
    {
        initialRouteName: 'RecipeHome',
        headerMode: 'float'
    }
);

