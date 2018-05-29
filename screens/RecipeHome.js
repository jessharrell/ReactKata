import React, {Component} from 'react';
import {Button, FlatList, Text, View, StyleSheet, TouchableHighlight} from "react-native";

type Props = {};
export default class RecipeHome extends Component<Props> {

    static navigationOptions = {title: 'Top Notch Recipes'};

    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataSource: [{id: 0, name: "test"}]};
    }

    async getCurrent() {
        return await fetch('http://127.0.0.1:9001/recipes')
            .then((response) => response.json())
            .then((resJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: resJson.items,
                });
            })
            .catch((err) => err);
    }

    componentDidMount() {
        this.getCurrent()
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("RecipeDetail")}>
                            <Text testID={`recipe${item.id}`}>{item.name}</Text>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
