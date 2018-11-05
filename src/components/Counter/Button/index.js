import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <View style={{ flex: 1,
                justifyContent: 'center', alignItems: 'center', fontSize: 12
                }}>
                <TouchableOpacity onPress={() => {
                    this.props.onPressButton()
                }}>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}