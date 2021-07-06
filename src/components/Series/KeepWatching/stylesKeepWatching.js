/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const stylesKeepWatching = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        /*         borderColor: '#f00',
                borderWidth: 1, */
    },

    title: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
        marginBottom: 5,
    },

    btnKeepWatching: {
        borderRadius: 5,
        marginHorizontal: 5,

    },

    img: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: 350,
        height: 200,
    },

    description: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#13161F',
        width: 350,
        height: 80,

    },

    contentTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
        marginTop: 10,
    },

    season: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },

    timeRemaining: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },

});

export default stylesKeepWatching;
