import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';


export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
                        <Text style={styles.textSkill} >
                            {skill}
                        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
