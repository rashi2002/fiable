import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = ({ navigation }) => {
  const [toggle, setToggle] = React.useState(false)
  const [notification, setNotification] = React.useState(false)

  const changeToggle = () => {
    if(toggle === true) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }
  const changeNotification = () => {
    if(notification === true) {
      setNotification(false)
    } else {
      setNotification(true)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.textHeader}>Username</Text>
        <Text style={styles.text}>@basilyusuf</Text>
      </View>
      <View style={styles.toggleContainer1}>
        <Text style={styles.textHeader}>Light Mode</Text>
        <ToggleSwitch
          isOn={toggle}
          onColor="#FFD700"
          offColor="#FFD700"
          size="large"
          onToggle={() => changeToggle()}
        />
      </View>
      <View style={styles.toggleContainer2}>
      <Text style={styles.textHeader}>Notifications</Text>
        <ToggleSwitch
          isOn={notification}
          onColor="#FFD700"
          offColor="#FFD700"
          size="large"
          onToggle={() => changeNotification()}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttons1}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </View>
        <View style={styles.buttons2}>
          <Text style={styles.buttonText}>Change Password</Text>
        </View>
        <View style={styles.bike}>
            <TouchableOpacity 
              onPress = {() => navigation.navigate('MapRecording', {mode: !toggle})}
            >
              <IconMaterialCommunityIcons
                name="bike" 
                size={65}
                style={{
                  color: 'white'
                }}
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    paddingTop: 180,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  firstContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  toggleContainer1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  toggleContainer2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  bottomContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons1: {
    width: '80%',
    height: 70,
    borderWidth: 2,
    borderColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15
  },
  buttons2: {
    width: '80%',
    height: 70,
    borderWidth: 2,
    borderColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bike: {
    backgroundColor: 'black',
  }
})


export default Settings