import {Text, View, Image, TouchableOpacity} from "react-native";
import React, { Component } from 'react';
import styles from './TimeoutStyle';

export default class TimeoutView extends Component {
    render() {
        return (
            <View style={styles.bigBox}>

                <Text style={styles.title}>
                    Changement de page réussi :-)
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Counter');
                    }}
                >
                    <Text>Voir le compteur</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('GeolocView');
                    }}
                >
                    <Text>Accès Géoloc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Users');
                    }}
                >
                    <Text>API Liste de Users</Text>
                </TouchableOpacity>
            </View>
        );
    }
}