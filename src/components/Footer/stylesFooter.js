/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const stylesFooter = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 0,
        left: 0,
        backgroundColor: '#1a1d29',
        width: '100%',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: '#fff4',

    },

    btn: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnIcon: {
        width: 25,
        height: 25,
    },

    profileBtn: {
        width: 25,
        height: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden',
    },

    profileIcon: {
        width: 30,
        height: 30,
        borderRadius: 50,


    },
});

export default stylesFooter;
