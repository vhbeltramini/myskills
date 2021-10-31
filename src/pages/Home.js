import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
    }

    useEffect(() => {
        const currentHours = new Date().getHours();
        switch(true) {
            case currentHours < 12:
                setGretting('Good Morning!');
                break;
            case currentHours >= 12 && currentHours < 18:
                setGretting('Good Afternoon!');
                break;
            case currentHours > 18: 
                setGretting('Good Night!');
                break;
        }
    }, []);

    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Victor Hugo</Text>
            <Text style={styles.grettings}>
                { gretting }
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#999"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, {marginVertical: 50}]} >
                My Skills
            </Text>

            <FlatList 
                data={mySkills} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />

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
    grettings: {
        color: '#fff',
    }
});
