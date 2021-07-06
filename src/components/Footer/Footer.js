/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import stylesFooter from './stylesFooter';


const Footer = () => {
    return (
        <View style={stylesFooter.container}>
            <View>
                <TouchableOpacity style={stylesFooter.btn}>
                    <Image source={require('../../assets/icons/footer/home.png')} resizeMode={'center'} style={stylesFooter.btnIcon} />
                </TouchableOpacity>

            </View>

            <View>
                <TouchableOpacity style={stylesFooter.btn}>
                    <Image source={require('../../assets/icons/footer/search.png')} resizeMode={'center'} style={stylesFooter.btnIcon} />
                </TouchableOpacity>

            </View>

            <View>
                <TouchableOpacity style={stylesFooter.btn}>
                    <Image source={require('../../assets/icons/footer/home.png')} resizeMode={'center'} style={stylesFooter.btnIcon} />
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity style={stylesFooter.profileBtn}>
                    <Image source={require('../../assets/icons/footer/profile.jpg')} resizeMode={'stretch'} style={stylesFooter.profileIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Footer;
