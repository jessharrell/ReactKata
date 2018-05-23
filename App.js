import React, {Component} from 'react';
import {FlatList, Text, View} from "react-native";
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// let fetch = require("node-fetch");

export async function getCurrent() {
    return await fetch('http://127.0.0.1:9000/')
        .then((res) => res.json())
        .catch((err) => err);
}

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <FlatList
                    data={getCurrent().items}
                    renderItem={({item}) => <Text id={"Recipe" + item.id}>{item.name}</Text>}
                />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
