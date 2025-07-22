import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';

export default function MyAccount() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const handleLogout = () => {
    // logout logic here
  };

  const handleDeleteAccount = () => {
    // delete logic here
  };

  const toggleModal = () => setModalVisible(!isModalVisible);
  const handleSave = () => {
    console.log('Language saved:', selectedLang);
    setModalVisible(false);
  };

  const languages = [
    'English', 'Hindi', 'Spanish', 'Arabic', 'French',
    'Turkish', 'Russian', 'Italian', 'German', 'Korean', 'Chinese(PRC)'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/icons/ic_menu.png')} />
        <Text style={styles.headerText}>My Account</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../assets/icons/driver_pic.png')}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.name}>Frank Smith</Text>
            <Text style={styles.email}>frank.smith@gmail.com</Text>
            <Text style={styles.phone}>+1 1234567891</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/icons/edit.png')} />
        </TouchableOpacity>
      </View>

      {/* Placeholder for Extra Section */}
      <View style={styles.extraBox}></View>

      {/* Quick Links */}
      <Text style={styles.quickLinks}>QUICK LINKS</Text>


      <View style={styles.linkCard}>
        <TouchableOpacity style={styles.linkItem}>
          <Image source={require('../assets/icons/ride_history.png')} />
          <Text style={styles.linkText}>History</Text>
          <Image source={require('../assets/icons/arrowR.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={toggleModal}>
          <Image source={require('../assets/icons/add_location.png')} />
          <Text style={styles.linkText}>Change Language</Text>
          <Image source={require('../assets/icons/arrowR.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Image source={require('../assets/icons/wallet.png')} />
          <Text style={styles.linkText}>Wallet</Text>
          <Image source={require('../assets/icons/arrowR.png')} />
        </TouchableOpacity>
      </View>

      {/* Delete Account */}
      <TouchableOpacity onPress={handleDeleteAccount}>
        <Text style={styles.deleteAccount}>Delete Account</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      

      {/* Language Modal Bottom Sheet */}
      <View isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modalMain}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Language</Text>
          <ScrollView>
            {languages.map((lang) => (
              <View key={lang} style={styles.optionRow}>
                <RadioButton
                  value={lang}
                  status={selectedLang === lang ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedLang(lang)}
                  color="#4a4af4"
                />
                <Text style={styles.langText}>{lang}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7fc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    color: '#666',
    fontSize: 14,
  },
  phone: {
    fontSize: 14,
    color: '#444',
  },
  extraBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 120,
    marginBottom: 20,
  },
  quickLinks: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  linkCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  linkText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  deleteAccount: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutBtn: {
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop:25,
    backgroundColor: 'red',
  },
 modalContent: {
  backgroundColor: '#fff', // ✅ clean white background
  padding: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  maxHeight: '80%',
},
modalMain:{
position:"relative",
verticalAlign:'bottom',
maxWidth:'100%',
color:'red'

},
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  langText: {
    fontSize: 16,
  },
  saveBtn: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
  },
});
