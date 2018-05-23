import React, {Component} from 'react';
import {FlatList, Text, View} from "react-native";
// import {FlatList, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state = { isLoading: true, dataSource: ["zeroth"]};
    }

    async getCurrent() {
        return await fetch('http://127.0.0.1:9000/recipes')
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
            <View>
                <Text>This is the top</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
                <Text>This is the bottom</Text>
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
