import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import firebase from 'firebase'

export default function Signup ({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => console.log({ data }))
        .catch(error => setError(error.message))
    }

    return (
        <View>
            <Text>Sign Up</Text>
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
                onPress={handleSignUp}
                title="Sign Up"
            />
            <Button
                title="Do you have already an account? Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}