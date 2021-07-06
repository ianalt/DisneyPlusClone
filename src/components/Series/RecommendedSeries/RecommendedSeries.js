/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import imgCloneWars from '../../../assets/img/recommended-series/clonewars.jpg';
import imgCoco from '../../../assets/img/recommended-series/coco.jpg';
import imgLuca from '../../../assets/img/recommended-series/luca.jpg';
import imgMulan from '../../../assets/img/recommended-series/mulan.jpg';
import { RecommendedSeriesCard } from './RecommendedSeriesCard/RecommendedSeriesCard';

import stylesRecommendedSeries from './stylesRecommendedSeries';


const RECOMMENDED = [
    {
        title: 'Clone Wars',
        image: imgCloneWars,
    },

    {
        title: 'Coco',
        image: imgCoco,
    },

    {
        title: 'Luca',
        image: imgLuca,
    },

    {
        title: 'Mulan',
        image: imgMulan,
    },
];

const RecommendedSeries = () => {
    return (
        <View style={stylesRecommendedSeries.container}>
            <Text style={stylesRecommendedSeries.title}>Recomendados para Você</Text>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={RECOMMENDED} renderItem={({ item }) => <RecommendedSeriesCard series={item} />} keyExtractor={item => item.title} />
        </View>
    );
};

export default RecommendedSeries;
