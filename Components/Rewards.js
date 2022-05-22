import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'

const ProfileScreen = ({ navigation }) => {
    const progressHeight = 30
    return (
        <View style={styles.container}>
            <View style={styles.circularProgressContainer}>
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
            </View>
            <View style={styles.topContainer}>
                <View style={styles.progressContainer}>
                    <IconAntDesign
                        name="amazon"
                        size={progressHeight}
                        style={{
                            color: 'white'
                        }}
                    />
                    <Progress.Bar
                        progress={0.7}
                        width={275}
                        height={progressHeight}
                        color={'#FFD700'}
                        borderRadius={20}
                        unfilledColor={'white'}
                        borderWidth={0}
                    />
                </View>
                <View style={styles.progressContainer}>
                    <IconEntypo
                        name="spotify"
                        size={progressHeight}
                        style={{
                            color: 'white'
                        }}
                    />
                    <Progress.Bar
                        progress={0.5}
                        width={275}
                        height={progressHeight}
                        color={'#FFD700'}
                        borderRadius={20}
                        unfilledColor={'white'}
                        borderWidth={0}
                    />
                </View>
                <View style={styles.progressContainer}>
                    <IconEntypo
                        name="app-store"
                        size={progressHeight}
                        style={{
                            color: 'white'
                        }}
                    />
                    <Progress.Bar
                        progress={0.3}
                        width={275}
                        height={progressHeight}
                        color={'#FFD700'}
                        borderRadius={20}
                        unfilledColor={'white'}
                        borderWidth={0}
                    />
                </View>
                <View style={styles.progressContainer}>
                    <IconEntypo
                        name="beamed-note"
                        size={progressHeight}
                        style={{
                            color: 'white'
                        }}
                    />
                    <Progress.Bar
                        progress={0.1}
                        width={275}
                        height={progressHeight}
                        color={'#FFD700'}
                        borderRadius={20}
                        unfilledColor={'white'}
                        borderWidth={0}
                    />
                </View>
            </View>
            <View style={styles.coinContainer}>
                <Text style={styles.coinText}>Fiable$ 24.33</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('Home', {name: 'Jane'})}
                >
                    <IconFoundation
                        name="home" 
                        size={45}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('MapRecording', {mode: true})}
                >
                    <IconMaterialCommunityIcons
                        name="bike-fast" 
                        size={45}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('Settings')}
                >
                    <IconIonicons
                        name="settings-sharp" 
                        size={45}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    circularProgressContainer: {
        position: 'absolute',
        top: 70,
    },
    topContainer: {
        position: 'absolute',
        top: 350,
    },
    progressContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingRight: 18
    },
    coinContainer: {
        position: 'absolute',
        bottom: 100,
        borderWidth: 4,
        borderColor: '#FFD700',
    },
    coinText: {
        color: 'white',
        fontSize: 35,
        padding: 10
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        paddingBottom: 30,
        paddingTop: 10,
        position: 'absolute',
        bottom: -25,
        left: 0,
    },
    icon: {
        color: 'black'
    },
});
export default ProfileScreen