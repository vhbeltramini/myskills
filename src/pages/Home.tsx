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


interface SkillData {
    id: string;
    name: string;
}

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');
    
    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
            
        }
        
        setMySkills(oldSkills => [...oldSkills, data]);
    }

    function handleRemoveNewSkill(id: string) {
        setMySkills(oldSkills => oldSkills.filter(
            skill => skill.id !== id
        ))

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

            <Button 
                onPress={handleAddNewSkill}
                title="Add New Skill"
            />

            <Text style={[styles.title, {marginVertical: 50}]} >
                My Skills
            </Text>

            <FlatList 
                data={mySkills} 
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name}
                        onPress={ () => handleRemoveNewSkill(item.id)}
                    />
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
