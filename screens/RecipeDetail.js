import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

type Props = {
    navigation: {
        navigate: (screen: string, options: any) => void,
        getParam: (paramName: string, defaultValue: any) => any
    },
    id: number
};

type State = {
    id: number,
    isLoading: boolean,
    dataSource: {}
};

export default class RecipeDetail extends Component<Props, State> {

    state = {
        isLoading: true,
        id: this.props.navigation.getParam('id', {})
    };

    constructor(props) {
        super(props);

        let dataSource;
        if (this.state.id === 1) {
            dataSource = [
                {reviewer: "Bob", rating: 23},
                {reviewer: 'Mary', rating: 24}]
        } else if (this.state.id === 2) {
            dataSource = [
                {reviewer: "Joe", rating: 25},
                {reviewer: 'Fred', rating: 26}]
        }
        this.state.dataSource = dataSource;
    }

    render() {
        return (
            <View>
                <Text className="recipeName" testID="recipeRatingsTestId" style={style.recipeHeader}>blah{this.state.id}</Text>
                <FlatList
                    className="recipeRatings"
                    testID="ratingsList"
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