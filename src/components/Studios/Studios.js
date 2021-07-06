/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import stylesStudios from './stylesStudios';

const Studios = () => {
    // optei por deixar o componente desta forma pois estava dando erro no espaçamento.
    return (
        <View style={stylesStudios.container}>
            <LinearGradient colors={['#343644', '#292827']} style={stylesStudios.cardStudio}>
                <TouchableOpacity style={stylesStudios.btnStudio}>
                    <Image source={require('../../assets/icons/disney-logo.png')} resizeMode={'center'} style={stylesStudios.imgStudio} />
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#343644', '#292827']} style={stylesStudios.cardStudio}>
                <TouchableOpacity style={stylesStudios.btnStudio}>
                    <Image source={require('../../assets/icons/pixar-logo.png')} resizeMode={'center'} style={stylesStudios.imgStudio} />
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#343644', '#292827']} style={stylesStudios.cardStudio}>
                <TouchableOpacity style={stylesStudios.btnStudio}>
                    <Image source={require('../../assets/icons/marvel-logo.png')} resizeMode={'center'} style={stylesStudios.imgStudio} />
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#343644', '#292827']} style={stylesStudios.cardStudio}>
                <TouchableOpacity style={stylesStudios.btnStudio}>
                    <Image source={require('../../assets/icons/starwars-logo.png')} resizeMode={'center'} style={stylesStudios.imgStudio} />
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#343644', '#292827']} style={stylesStudios.cardStudio}>
                <TouchableOpacity style={stylesStudios.btnStudio}>
                    <Image source={require('../../assets/icons/natgeo-logo.png')} resizeMode={'center'} style={stylesStudios.imgStudio} />
                </TouchableOpacity>
            </LinearGradient>

        </View>

    );
};

export default Studios;