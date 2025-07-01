import { PickerItem } from '@/components/function';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function MergeLayout() {

    const [tamanhoSelect, setTamanhoSelect] = useState('');
    const tamanho = [
        { key: '1', label: '1 Jogador', value: '1' },
        { key: '2', label: '2 Jogadores', value: '2' },
        { key: '3', label: '3 Jogadores', value: '3' },
        { key: '4', label: '4 Jogadores', value: '4' },
        { key: '5', label: '5 Jogadores', value: '5' },
    ];

    return (
        <View>
            <Text>Montar Times</Text>
            <Text>Selecione a quantidade em cada campo</Text>

            <PickerItem 
                tamanho={tamanho}
                tamanhoSelect={tamanhoSelect}
                onChange={(itemValue) => console.log(itemValue)}
            />
        </View>
    );
}