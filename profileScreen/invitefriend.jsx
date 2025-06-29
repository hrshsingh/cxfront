import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InviteFriend({navigation}) {
  const [inviteCode, setInviteCode] = useState('AV82454');

  const handleInvite = () => {
navigation.navigate('StackRoutes', {
  screen: 'inviteadvance'
});

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity>
        <Image source={require('../assets/icons/backicon.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>Invite Friend</Text>
      </View>

      {/* Image */}
      <Image source={require('../assets/icons/invitef.png')}/>

      {/* Info Text */}
      <Text style={styles.inviteTitle}>Invite Friends</Text>
      <Text style={styles.subtitle}>
        When your friends sign up this referral code, you can receive a free ride
      </Text>

      {/* Code Input */}
      <Text style={styles.label}>Share your invite code</Text>
      <TextInput
        style={styles.input}
        value={inviteCode}
        editable={false}
        selectTextOnFocus={true}
      />

      {/* Invite Button */}
      <TouchableOpacity style={styles.button} onPress={handleInvite}>
        <Text style={styles.buttonText}>Invite</Text>
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
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  inviteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '100%',
    paddingHorizontal: 20,
    height: 50,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 14,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
