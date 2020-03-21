import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import firebase from 'firebase'



export default function Login ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleLogin = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => console.log({ data }))
        .catch(error => setError(error.message))
    }
    return (
        <View>
            <Text>Login</Text>
            {error &&
                <Text style={{ color: 'red' }}>
                    { error }
                </Text>
            }
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button
                onPress={handleLogin}
                title="Login"
            />
            <Button
                title="Do not have an account? Sign up"
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    )
}