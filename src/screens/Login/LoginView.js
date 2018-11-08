import React, {Component} from "react";
import {View, TextInput, StyleSheet, Text} from "react-native";

export default class LoginView extends Component { /*need to add the API for user email and password. if user not find then create a new one if button
    inscription is push, if not send error user not found */
    render() {
        return (
            <View style={styles.bigBox}>

                <Text style={styles.title}>
                    Page de login :
                </Text>
                <View style={styles.form}>
                    <TextInput
                        style={{margin: 5, height: 40, borderColor: '#525b62', borderWidth: 1, borderRadius: 2}}
                        onChangeText={(email) => this.setState({email})}
                        underlineColorAndroid='transparent'
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={{margin: 5, height: 40, borderColor: '#525b62', borderWidth: 1, borderRadius: 2}}
                        onChangeText={(Password) => this.setState({Password})}
                        underlineColorAndroid='transparent'
                        placeholder="Mot de passe"
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    bigBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        flexDirection: 'column'
    }

});