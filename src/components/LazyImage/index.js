import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import {
    Small,
    Original,
} from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);
const LazyImage = ({ 
    smallSource,
    source,
    aspectRatio,
}) => {
    const opacity = new Animated.Value(0);
    const [loaded, setLoaded] = useState(false);  //Forçar delay mesmo com uso de cache

    useEffect(() => {
        setTimeout(() => { //Forçar delay mesmo com uso de cache
            setLoaded(true);
        }, 1000);
    }, []);

    function handleAnimate() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return (
        <Small
        source={smallSource}
        ratio={aspectRatio}
        resizeMode="contain"
        blurRadius={2}
        >   
        {
            loaded &&  //Forçar delay mesmo com uso de cache
            <OriginalAnimated
                style={{ opacity }}
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