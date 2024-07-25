import React, { useState } from 'react'
import {Button, Text,TextInput, View} from 'react-native'

interface FormData {
    email: string
    username: string
    password: string
    age: number
    interests: string[]
}

export function RegistrationForm() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)
    const [interests, setInterests] = useState()

    return (
        <View>
            <Text>{'Account Sign Up'}</Text>

            <Text>{'Parent/Guardian Email Address'}</Text>
            <TextInput
                style={{}}
                placeholder={'Enter Email Address'}
                onChangeText={(newEmail: string) => setEmail(newEmail)}
                defaultValue={email}
            />

            <Text>{'Learner Username'}</Text>
            <TextInput
                style={{}}
                placeholder={'Create Username'}
                onChangeText={(newUsername: string) => setUsername(newUsername)} 
                defaultValue={username}
            />
            
            <Text>{'Password'}</Text>
            <TextInput
                style={{}}
                placeholder={'Create Password'}
                onChangeText={(newPassword: string) => setPassword(newPassword)}
                secureTextEntry={true}
                defaultValue={password}
            />
            <Text>{'Learner Age'}</Text>
            <TextInput
                style={{}}
                placeholder={'Enter Learner\'s Age'}
                onChangeText={(newAge: number) => setAge(newAge)} 
                defaultValue={age}
            />
            <Text>{'Learner Interests'}</Text>
            <TextInput
                style={{}}
                placeholder={'Select All That Apply'}
            />

            <Button
                onPress={handleSubmit}
                title='Sign Up'
            />

        </View>
    )
}

export const handleSubmit = async (data: FormData) => {
    console.log(`${data.username}'s profile has been created`);
}