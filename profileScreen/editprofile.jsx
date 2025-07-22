import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function EditProfile() {
  const [name, setName] = useState('Frank smith');
  const [email, setEmail] = useState('frank.smith@gmail.com');
  const [phone, setPhone] = useState('+27-2356 4158');

  const handleUpdate = () => {
    // update logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back and Title */}
      <View style={styles.header}>
        <TouchableOpacity>
         <Image source={require('../assets/icons/backicon.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={require("../assets/icons/driver_pic.png")} 
          style={styles.profilePic}
        />
        <TouchableOpacity style={styles.cameraIcon}>
         <Image
          source={require("../assets/icons/camera_ic.png")} 
          style={styles.profilePic}
        />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputGroup}>
      <Image source={require('../assets/icons/user.png')}/>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>

      <View style={styles.inputGroup}>
      <Image source={require('../assets/icons/mess.png')}/>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputGroup}>
       <Image source={require('../assets/icons/phone.png')}/>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          keyboardType="phone-pad"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8fe',
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  profilePicContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: '#4a4af4',
    padding: 6,
    borderRadius: 14,
  },
  inputGroup: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  updateButton: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
