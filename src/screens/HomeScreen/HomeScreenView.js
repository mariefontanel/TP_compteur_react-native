import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from "../../components/Button/Button";

export default class HomeScreenView extends React.Component {
    constructor(props){
        super(props);
        this.state ={}
    }
/*    componentDidMount() {
        setTimeout( () =>
        { this.props.navigation.navigate('Counter')}, 3000);
    }*/
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Bienvenue !</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        this.props.navigation.navigate('TimeoutView');
                    }}>
                        <Text>Changer de page</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});