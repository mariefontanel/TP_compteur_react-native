import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    counter: {
        flex: 1,
        backgroundColor: '#444444',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    bigBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCounter: {
        textAlign: 'center',
        fontSize: 22
    },
    boxLikeDislike: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDislike: {
        width: '35%',
        height: 50,
        backgroundColor: 'orange',
        borderWidth: 1,
        borderRadius: 20
    },
    boxLike: {
        width: '35%',
        height: 50,
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 20

    }
});