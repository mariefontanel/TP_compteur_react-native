import {Text, View} from "react-native";
import React, { Component } from 'react';
import styles from './CounterStyle';
import Button from "../../components/Button/Button";

export default class CounterView extends Component {
    render() {
        return (
            <View style={styles.bigBox}>


                <Text style={styles.textCounter}>{this.props.number}</Text>

                <View style={styles.boxLikeDislike}>
                    <View style={styles.boxDislike}>
                        <Button
                            title={`J'aime pas`}
                            onPressButton={this.props.decrement}
                        />
                    </View>
                    <View style={styles.boxLike}>
                        <Button
                            title={`J'aime`}
                            onPressButton={this.props.increment}
                        />
                    </View>
                </View>

            </View>
        );
    }
}