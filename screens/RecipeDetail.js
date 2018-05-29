import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

type Props = {};
export default class RecipeDetail extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, dataSource: []
        };
    }

    render() {
        return (
            <View>
                <Text className="recipeName" testID="recipeRatingsTestId" style={style.recipeHeader}>Recipe Name</Text>
                <FlatList
                    className="recipeRatings"
                    style={style.recipeDetails}
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text
                        testID={`${item.reviewer}`}>{`${item.reviewer}: ${item.rating}`}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text className="recipeAverageRating" style={style.recipeDetails}>Recipe Average Rating</Text>
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