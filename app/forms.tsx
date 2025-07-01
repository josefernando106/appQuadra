import { ListPlayerFlat } from '@/components/function';
import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../components/styles';
import TeamsLayout from '../components/teams';

export default function FormLayout() {
    const [player, setPlayer] = React.useState<string>('');
    const [playerList, setListPlayer] = React.useState<Array<string>>([]);
    const [showTeams, setShowTeams] = React.useState<boolean>(false);

    function addPlayer(player: string) {
        if (player.trim() === '') {
            alert('Digite o nome do jogador');
            return;
        }

        setListPlayer([...playerList, player]);
        setPlayer('');
    }

    if (showTeams) {
        return (
            <TeamsLayout 
                playerList={playerList} 
                onGoBack={() => setShowTeams(false)} 
            />
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar o time</Text>
            
            <Text style={styles.description}>Jogadores cadastrados: {playerList.length}</Text>

            <Text style={styles.text}> Nome do Jogador</Text>
            <TextInput
                placeholder='nome'
                value={player}
                style={styles.textInput}
                onChangeText={(e: any) => setPlayer(e)} />

            <TouchableOpacity onPress={() => { addPlayer(player) }} style={styles.button}>
                <Text style={styles.buttonText}>Adicionar Jogador</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => setShowTeams(true)} 
                touchSoundDisabled={playerList.length < 8 ? false : true}
                style={[styles.button, { backgroundColor: '#28a745' }]}
                disabled={playerList.length === 0}
            >
                <Text style={styles.buttonText}>Gerar Times</Text>
            </TouchableOpacity>
            <View style={styles.flatListContainer}>
                <FlatList 
                data={playerList}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <ListPlayerFlat data={item} index={index + 1}/>
                )}
            />
            </View>
            
        </View>
    )
}

