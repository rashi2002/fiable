import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ProfileScreen