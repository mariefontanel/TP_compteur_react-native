import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CounterView from './CounterView';

export default class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    /**
     * Increment Counter.
     */
    increment() {
        this.setState({
            number: this.state.number + 1
        })
    }

    /**
     * Decrement Counter.
     */
    decrement() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }


    render() {
        return(
        <CounterView number={this.state.number} increment={this.increment} decrement={this.decrement}/>
        );
    }
}