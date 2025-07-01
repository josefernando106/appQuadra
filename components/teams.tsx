import { PickerItem } from '@/components/function';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface TeamsProps {
    playerList: string[];
    onGoBack: () => void;
}

export default function TeamsLayout({ playerList, onGoBack }: TeamsProps) {
    const [numberOfTeams, setNumberOfTeams] = React.useState<string>('2');
    const [teams, setTeams] = React.useState<Array<Array<string>>>([]);

    const teamOptions = [
        { key: '1', label: '2 Times', value: '2' },
        { key: '2', label: '3 Times', value: '3' },
        { key: '3', label: '4 Times', value: '4' },
    ];
    const tamanho = [
        { key: '2', label: '2 - Jogadores', value: '2' },
        { key: '3', label: '3 - Jogadores', value: '3' },
        { key: '4', label: '4 - Jogadores', value: '4' },
        { key: '5', label: '5 - Jogadores', value: '5' },
        { key: '6', label: '6 - Jogadores', value: '6' },
        { key: '7', label: '7 - Jogadores', value: '7' },
    ];

    
    function generateTeams() {
        if (playerList.length === 0) {
            alert('Nenhum jogador cadastrado!');
            return;
        }

        const playersPerTeam = parseInt(numberOfTeams);
        const totalPlayersNeeded = playersPerTeam * 2; // Sempre 2 times
        const nextTeams = playerList.slice((totalPlayersNeeded), playerList.length);
       
        if (playerList.length < totalPlayersNeeded) {
            alert('Numero de jogadores insuficiente para formar os times!');
            return;
        }
        
        let selectedPlayers = playerList.slice(0, totalPlayersNeeded);
        console.log(selectedPlayers);
        
        const generatedTeams: Array<Array<string>> = [[], []]; // Sempre 2 times

        // Distribuir jogadores nos times seguindo a ordem
        selectedPlayers.forEach((player, index) => {
            let teamIndex;            
            teamIndex = Math.floor(Math.random() * 2);            
            generatedTeams[teamIndex].push(player);
        });

        setTeams(generatedTeams);
        console.log(nextTeams);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerar Times</Text>

            <Text style={styles.description}>
                Jogadores disponíveis: {playerList.length}
            </Text>
            <Text style={styles.description}>
                Jogadores selecionados: {parseInt(numberOfTeams) * 2} ({numberOfTeams} por time)
            </Text>

            <Text style={styles.text}>Jogadores por time:</Text>
            <PickerItem
                tamanho={tamanho}
                tamanhoSelect={numberOfTeams}
                onChange={setNumberOfTeams}
            />

            <TouchableOpacity onPress={generateTeams} style={styles.button}>
                <Text style={styles.buttonText}>Gerar Times</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onGoBack} style={[styles.button, { backgroundColor: '#6c757d' }]}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            {teams.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.title}>Times Gerados:</Text>
                    {teams.map((team, teamIndex) => (
                        <View key={teamIndex} style={{ marginBottom: 15 }}>
                            <Text style={styles.description}>
                                Time {teamIndex + 1} ({team.length} jogadores):
                            </Text>
                            {team.map((player, playerIndex) => (
                                <Text key={playerIndex} style={styles.text}>
                                    {playerIndex + 1}. {player}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}
