import React, { useEffect } from 'react'
import * as GoogleSignIn from 'expo-google-sign-in';
import { Button } from 'react-native';

export default function GoogleAuthBtn() {
    const initAsync = async () => {
        await GoogleSignIn.initAsync()
        this._syncUserWithStateAsync()
    }

    const _syncUserWithStateAsync = async () => {
        await GoogleSignIn.signInSilentlyAsync()
    }

    const signInWithGoogle = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            await GoogleSignIn.signInAsync();
            if (type === 'success') {
                _syncUserWithStateAsync();
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    }

    const signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
    }

    useEffect(() => {
        initAsync()
    }, [])

    return (

        <Button
            title="Sign in with Google"
            style={{ width: 192, height: 48 }}
            onPress={signInWithGoogle}
        />
    )
}