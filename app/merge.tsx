import { PickerItem } from '@/components/function';
import styles from '@/components/styles';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function MergeLayout() {

    const [tamanhoSelect, setTamanhoSelect] = useState('');
    const tamanho = [
        { key: '2', label: '2 - Jogadores', value: '2' },
        { key: '3', label: '3 - Jogadores', value: '3' },
        { key: '4', label: '4 - Jogadores', value: '4' },
        { key: '5', label: '5 - Jogadores', value: '5' },
        { key: '6', label: '6 - Jogadores', value: '6' },
        { key: '7', label: '7 - Jogadores', value: '7' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Montar Times</Text>
            <Text style={styles.text}> Selecione a quantidade em cada campo</Text>
            <PickerItem 
                tamanho={tamanho}
                tamanhoSelect={tamanhoSelect}
                onChange={(itemValue) => console.log(itemValue)}
            />            
        </View>
    );
}