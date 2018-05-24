import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

type Props = {};
export default class RecipeDetail extends Component<Props> {

    render() {
        return (
            <View>
                <Text style={style.recipeHeader}>Recipe Name</Text>
                <FlatList style={style.recipeDetails}>Recipe Ratings</FlatList>
                <Text style={style.recipeDetails}>Recipe Average Rating</Text>
            </View>
        )

    }
}

const style = StyleSheet.create(
    {
        recipeHeader: {},
        recipeDetails: {}
    }
);