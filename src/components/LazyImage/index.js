import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import {
    Small,
    Original,
} from './styles';

const LazyImage = ({ 
    smallSource,
    source,
    aspectRatio,
}) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => { //Forçar delay mesmo com uso de cache
            setLoaded(true);
        }, 1000);
    }, []);

    function handleAnimate() {

    }

    return (
        <Small
        source={smallSource}
        ratio={aspectRatio}
        resizeMode="contain"
        blurRadius={2}
        >   
        {
            loaded && 
            <Original 
                source={source}
                ratio={aspectRatio}
                resizeMode="contain"
                onLoadEnd={handleAnimate}
            />
        }
        </Small>
    );
}

export default LazyImage;