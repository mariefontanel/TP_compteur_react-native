import React from 'react';
import axios from 'axios';
import {View, Text, FlatList, TouchableOpacity} from "react-native";

export default class UserListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    getUsersData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({ users: res.data });
        })
    }

    componentDidMount() {
        this.getUsersData();
    }

    render() {
        return (
            <View>
            <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => item.key}
                    renderItem={
                        ({item}) =>
                            <TouchableOpacity

                                onPress={() => {
                                this.props.navigation.navigate('UserView');
                            }}>
                                <Text>{item.username}</Text>
                            </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
