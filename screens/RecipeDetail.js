import React from "react";
import {Text, View} from "react-native";

export default class RecipeDetail {

    render() {
        return (
            <View>
                <Text style={style.recipeHeader}>Recipe Name</Text>
                <Text style={style.recipeDetails}>Recipe Rating</Text>
                <Text style={style.recipeDetails}>Recipe Ingredients</Text>
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