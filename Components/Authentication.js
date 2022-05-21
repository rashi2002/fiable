import { View, TextInput, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';


const Authentication = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source = {require('./fiable-logo.png')} 
                style = {styles.imageFirst}
            />
            <View style={styles.inputContainer}>
                <View style={styles.inputView}>
                    <View style={styles.inputIndivContainer}>
                        <IconIonicons 
                            name="person"
                            size={30}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder = "Username"
                            placeholderTextColor = "white"
                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.inputIndivContainer}>
                        <IconIonicons 
                            name="lock-closed"
                            size={30}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder = "Password"
                            placeholderTextColor = "white"
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress = {() =>
                        navigation.navigate('Home')
                    }
                >
                    <IconMaterialCommunityIcons
                        name="bike-fast" 
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
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    imageFirst: {
        width: 300, 
        height: 300
    },
    inputContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView: {
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputIndivContainer: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1.1,
        borderColor: "white",
        alignItems: "center",
        borderRadius: 10,
    },
    inputText: {
        textAlign: 'center',
        width: '100%',
        height: 60,
        paddingRight: 100,
        fontSize: 15
    },
    icon: {
        color: "white",
        marginTop: 40
    },
    inputIcon: {
        color: "white",
        paddingLeft: 20
    }
});
export default Authentication