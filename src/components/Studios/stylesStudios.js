/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const stylesStudios = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
        height: 50,
        width: '100%',
    },

    cardStudio: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnStudio: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgStudio: {
        width: 40,
        height: 40,
    },
});

export default stylesStudios;
