import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingHero(props) {
    return (
        <LinearGradient colors={['#FA508C', '#FFC86E']}>
            <View style={styles.container}>
                <Image
                    style={{width: 96, height: 90}}
                    source={require('../assets/images/logo.png')}
                />
                <Text>{props.title}</Text>
                <Text>{props.text}</Text>
            </View>
        </LinearGradient>
    )
}

OnboardingHero.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})