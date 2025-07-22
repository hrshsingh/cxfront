import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';


const suggestedContacts = [
  { id: '1', name: 'Johnny Rios', status: 'Invite', initials: 'JR' },
  { id: '2', name: 'Manoj Kumar', status: 'Invited', initials: 'Mk' },
  { id: '3', name: 'Johnny Rios', status: 'Invited', initials: 'JR' },
];

const iconMap = {
  whatsapp: require('../assets/icons/whatsapp_ic.png'),
  messenger: require('../assets/icons/messanger_ic.png'),
  instagram: require('../assets/icons/insta_ic.png'),
  link: require('../assets/icons/linked_ic.png'),
};


export default function InviteFriendAdvanced() {
  const [inviteCode] = useState('AVB2454');

  const renderContact = ({ item }) => (
    <View style={styles.contactRow}>
      <View style={styles.initialCircle}>
        <Text style={styles.initials}>{item.initials}</Text>
      </View>
      <Text style={styles.contactName}>{item.name}</Text>
      <TouchableOpacity>
        <Text style={[
          styles.inviteStatus,
          item.status === 'Invite' ? styles.activeInvite : styles.passiveInvite,
        ]}>
          {item.status}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
      <Image source={require('../assets/icons/backicon.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>Invite Friend</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Refer & Earn</Text>
          <Text style={styles.bannerSubtitle}>
            You earn 15$, your friend gets 40% off on first booking
          </Text>
        </View>
        <Image
        source={require("../assets/icons/gift_ig.png")}
        />
      </View>

      {/* Invite Code */}
      <Text style={styles.label}>Share your invite code</Text>
      <TextInput
        value={inviteCode}
        editable={false}
        style={styles.input}
      />

      {/* Social Buttons */}
    <View style={styles.socialRow}>
  <SocialIcon name="whatsapp" label="Whatsapp" />
  <SocialIcon name="messenger" label="Messenger" />
  <SocialIcon name="instagram" label="Instagram" />
  <SocialIcon name="link" label="Copy Link" />
</View>


      {/* Suggested Contacts */}
      <View style={styles.contactHeader}>
        <Text style={styles.contactTitle}>Suggested Contact</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={suggestedContacts}
        keyExtractor={item => item.id}
        renderItem={renderContact}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

function SocialIcon({ name, label }) {
  return (
    <View style={styles.socialItem}>
      <TouchableOpacity style={styles.socialButton}>
 <Image source={iconMap[name]} style={{ width: 24, height: 24 }} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.socialLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fc',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#4a4af4',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#eee',
    fontSize: 13,
    marginTop: 4,
  },
  bannerImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 45,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  socialItem: {
    alignItems: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 50,
    marginBottom: 4,
  },
  socialLabel: {
    fontSize: 12,
  },
  contactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewAll: {
    fontSize: 14,
    color: '#4a4af4',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  initialCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initials: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contactName: {
    flex: 1,
    fontSize: 15,
  },
  inviteStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeInvite: {
    color: '#4a4af4',
  },
  passiveInvite: {
    color: 'gray',
  },
});
