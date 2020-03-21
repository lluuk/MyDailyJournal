import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

import OnboardingHero from '../components/OnboardingHero'
// import GoogleAuthBtn from '../components/GoogleAuthBtn'

const { width: viewportWidth } = Dimensions.get('window');

export default function Onboarding(props) {
    const onboardingViews = [
        { title: 'Write Everyday', text: 'Jott down your everyday'},
        { title: 'Get Inspired', text: 'Fresh inspiration to'},
        { title: 'Discover Journeys', text: 'Follow people and be'},
    ]

    const renderItem = item => {
        const { title, text } = item.item
        return (
            <OnboardingHero title={title} text={text} />
        )
    }

    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                    data={onboardingViews}
                    renderItem={renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    onSnapToItem={(index) => setActiveSlide(index) }
                />
                <Pagination
                    containerStyle={{ marginTop: -75 }}
                    dotsLength={onboardingViews.length}
                    activeDotIndex={activeSlide}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button title="Login" onPress={() => props.navigation.navigate("Login")} style={styles.btn}/>
                <Button title="Sign up" onPress={() => props.navigation.navigate("Signup")} style={styles.btn}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    carouselContainer: {
        flex: 1,
        flexGrow: 4,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
    },

    btn: {
        width: '100%',
        height: 35,
        alignSelf: 'stretch'
    },
})