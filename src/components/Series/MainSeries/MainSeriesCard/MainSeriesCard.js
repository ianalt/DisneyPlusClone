/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylesMainSeries from '../stylesMainSeries';

export const MainSeriesCard = ({ series }) => {

    return (
        <TouchableOpacity style={stylesMainSeries.btnMainSeries}>
            <Image style={stylesMainSeries.img} source={series.image} resizeMode={'cover'} />
        </TouchableOpacity>
    );
}