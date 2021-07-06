/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import stylesRecommendedSeries from '../stylesRecommendedSeries';

export const RecommendedSeriesCard = ({ series }) => {

    return (
        <TouchableOpacity style={stylesRecommendedSeries.btnRecommendedSeries}>
            <Image style={stylesRecommendedSeries.img} source={series.image} resizeMode={'stretch'} />
        </TouchableOpacity>
    );
};
