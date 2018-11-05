import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from "./Button";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    /**
     * Increment counter.
     */
    increment() {
        this.setState( {
            number: this.state.number + 1
        })
    }

    /**
     * Decrement counter.
     */
    decrement() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>


                    <Text style={{textAlign: 'center', fontSize: 22}}>{this.state.number}</Text>

                    <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <View style={{width: '35%', height: 50, backgroundColor: '#90384a'}}>
                            <Button
                                title={`J'aime pas`}
                                onPressButton={this.decrement.bind(this)}
                            />
                        </View>
                        <View style={{width: '35%', height: 50, backgroundColor: '#4a9038'}}>
                            <Button
                                title={`J'aime`}
                                onPressButton={this.increment.bind(this)}
                            />
                        </View>
                    </View>

            </View>
    );
    }
}