import React, { useState } from 'react'
import {Button, SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native'
const { styles } = require('./CSS')

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
    const [age, setAge] = useState('')
    
    const [interests, setInterests] = useState([])

    const handleSubmit = async () => {
        let data: FormData = {
            email: email,
            username: username,
            password: password,
            age: Number(age),
            interests: interests
        }
        console.log(`${data.username}'s profile has been created`)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Account Sign Up</Text>

                    <Text style={styles.label}>Parent/Guardian Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter Email Address'}
                        onChangeText={(val: string) => setEmail(val)}
                        defaultValue={email}
                        keyboardType='email-address'
                    />

                    <Text style={styles.label}>Learner Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Create Username'}
                        onChangeText={(val: string) => setUsername(val)} 
                        defaultValue={username}
                        textContentType='username'
                    />
                    
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Create Password'}
                        onChangeText={(val: string) => setPassword(val)}
                        secureTextEntry={true}
                        defaultValue={password}
                        textContentType='newPassword'
                    />

                    <Text style={styles.label}>Learner Age</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter Learner\'s Age'}
                        onChangeText={(val: string) => setAge(val)} 
                        defaultValue={age}
                        keyboardType='number-pad'
                    />

                    <Text style={styles.label}>Learner Interests</Text>
                    <TextInput
                        style={{}}
                        placeholder={'Select All That Apply'}
                    />

                    <View style={styles.button}>
                        <Button
                            onPress={() => handleSubmit()}
                            title='Sign Up'
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

