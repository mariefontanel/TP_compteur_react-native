import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreenView from "./src/screens/HomeScreen/HomeScreenView";
import CounterContainer from "./src/screens/Counter/CounterContainer";
import TimeoutView from "./src/screens/Timeout/TimeoutView";
import GeolocView from "./src/screens/Geoloc/GeolocView";
import UserListView from "./src/services/UsersList/UserListView";
import UserView from "./src/screens/UsersList/UserView";

class App extends React.Component {

}
const NavParams = createStackNavigator(
    {
        Home: {screen: HomeScreenView},
        Counter: {screen: CounterContainer},
        TimeoutView: {screen: TimeoutView},
        GeolocView: {screen: GeolocView},
        Users: {screen: UserListView},
        UserView: {screen: UserView}
    }
);

export default NavParams;