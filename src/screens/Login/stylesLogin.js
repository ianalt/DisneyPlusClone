/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const stylesLogin = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1d29',
    },

    loginContainer: {
        marginLeft: 20,
    },

    title: {
        width: '70%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,

    },

    input: {
        backgroundColor: '#31343e',
        marginBottom: 20,
        borderRadius: 5,
        width: '90%',
    },

    btn: {
        backgroundColor: '#0072d2',
        borderRadius: 5,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginBottom: 10,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
        padding: 10,
        fontSize: 16,
    },

    questionBox: {
        flexDirection: 'row',
    },

    question: {
        color: '#c9c9c9',
        fontSize: 14,
    },

    sigInLink: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 14,
    },

});

export default stylesLogin;
