import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import RecipeHome from "./screens/RecipeHome";
import RecipeDetail from "./screens/RecipeDetail";

type Props = {}
export default class App extends React.Component {

    render() {
        return <RootStack/>
    }
}

const RootStack = createStackNavigator(
    {
        RecipeHome: {
            screen: RecipeHome
        },
        RecipeDetail: {
            screen: RecipeDetail
        }
    },
    {
        initialRouteName: 'RecipeHome',
        headerMode: 'screen'
    }
);

