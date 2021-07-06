/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import stylesLogo from './stylesLogo';


const Logo = () => {
    return (
        <View style={stylesLogo.container}>
            <Image source={require('../../assets/icons/disneyplus-logo.png')} style={stylesLogo.img} />
        </View>
    );
};

export default Logo;
