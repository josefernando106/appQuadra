import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description:{
        fontSize: 16,
        marginBottom: 10,
    },
    text:{
        fontSize: 16,
        marginBottom: 10,
    },
    button:{
        backgroundColor: '#3b3dbf',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10,
        borderRadius: 5,
    },
    picketerItem:{
        color: '#000000',
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    picker:{
        height: 50,
        width: '100%',
        borderRadius: 5,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
    },
    flatListContainer:{
        flex: 1,
        marginTop: 20,
        borderColor: '#CCCCCC',
    },
    flatList:{
        padding: 3,
        fontSize: 14,
        borderColor: '#CCCCCC',
        borderWidth: 1,
    }

})

export default styles;