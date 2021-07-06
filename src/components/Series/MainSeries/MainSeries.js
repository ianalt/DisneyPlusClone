/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import imgLoki from '../../../assets/img/main-series/loki.jpg';
import imgRaya from '../../../assets/img/main-series/raya.jpg';
import imgWandaVision from '../../../assets/img/main-series/wandavision.jpg';
import imgStarWars5 from '../../../assets/img/main-series/starwars5.jpg';
import { MainSeriesCard } from '../MainSeries/MainSeriesCard/MainSeriesCard';
import stylesMainSeries from './stylesMainSeries';


const MAINSERIES = [
    {
        title: 'Loki',
        image: imgLoki,
    },
    {
        title: 'Raya',
        image: imgRaya,
    },
    {
        title: 'WandaVision',
        image: imgWandaVision,
    },
    {
        title: 'Star Wars V',
        image: imgStarWars5,
    },
];

const MainSeries = () => {

    return (
        <FlatList style={stylesMainSeries.container} horizontal={true} showsHorizontalScrollIndicator={false} data={MAINSERIES} renderItem={({ item }) => <MainSeriesCard series={item} />} keyExtractor={item => item.title} />
    );
};

export default MainSeries;
