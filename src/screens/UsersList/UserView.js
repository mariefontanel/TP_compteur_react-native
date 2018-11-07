import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class UserView extends React.Component {

    componentWillMount(){
        const {param} = this.props.navigation.state.params;
    }

     render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>page de détails</Text>
                    <Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});