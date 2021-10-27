import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity } from 'react-native';

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
    }

    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Victor Hugo</Text>

            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#999"
                onChangeText={setNewSkill}
            />

            <TouchableOpacity 
                style={styles.button}
                activeOpacity={.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text
                style={[styles.title, {marginVertical: 50}]}    
            >
                My Skills
            </Text>

            { 
                mySkills.map(skill => ( 
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill} >
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }

        </View>

    )   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize : 17,
        fontWeight: 'bold',
    },
    textSkill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1e25',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    }
});
