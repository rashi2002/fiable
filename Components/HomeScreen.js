import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Progress</Text>
            <CircularProgress 
                value={80} 
                radius={120}
                progressValueColor={'white'}
                maxValue={100}
                valueSuffix={'%'}
                titleStyle={{fontWeight: 'bold'}}
                activeStrokeWidth= {25}
                inActiveStrokeWidth= {25}
                activeStrokeColor={'#FFD700'}
                inActiveStrokeColor={'white'}
            />
            <Text style={styles.text}>You're close to completing this goal 🎉</Text>
            <TouchableOpacity 
                onPress = {() => navigation.navigate('MapRecording', {mode: true})}
                >
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.textButton}>Start Pedalling</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    textHeader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 45,
        marginBottom: 35
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        width: '65%',
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 35
    },
    buttonTextContainer: {
        width: 200,
        height: 71,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 22
    }
});

export default HomeScreen