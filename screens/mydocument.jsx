import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';

const documents = [
  {
    key: 'driving_license',
    title: 'Driving license',
    description: 'A Driving license is an official document',
  },
  {
    key: 'ghana_id',
    title: 'Ghana id card',
    description: 'Ghana official card',
  },
  {
    key: 'voter_id',
    title: 'Voter id card',
    description: 'Voter id card is an official document',
  },
  {
    key: 'passport',
    title: 'Passport',
    description: 'A passport is an travel document',
  },
];

const MyDocumentScreen = ({ navigation }) => {
  const [uploaded, setUploaded] = useState(['driving_license']);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleUploadPress = (key) => {
    setSelectedDoc(key);
    setModalVisible(true);
  };

  const uploadPhoto = (method) => {
    if (!uploaded.includes(selectedDoc)) {
      setUploaded((prev) => [...prev, selectedDoc]);
    }
    setModalVisible(false);
    // Add real camera/gallery logic here based on `method`
    console.log(`${method} for ${selectedDoc}`);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.headerBox}>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
            <Image source={require('../assets/icons/ic_menu.png')} />
          </TouchableOpacity>
          <Text style={styles.header}>My Document</Text>
          <View></View>
        </View>

        {documents.map((doc) => {
          const isUploaded = uploaded.includes(doc.key);
          return (
            <View
              key={doc.key}
              style={[
                styles.card,
                isUploaded ? styles.uploadedCard : styles.defaultCard,
              ]}
            >
              <View>
                <Text style={styles.title}>{doc.title}</Text>
                <Text style={styles.description}>{doc.description}</Text>
              </View>
              <TouchableOpacity onPress={() => handleUploadPress(doc.key)}>
                <View
                  style={[
                    styles.uploadIcon,
                     styles.inactiveUpload,
                  ]}
                >
                  {
                  isUploaded ?
                  <Image
                    source={require('../assets/icons/check_ic.png')}
                    style={styles.logo}
                  />
                  :
    <Image
                    source={require('../assets/icons/docicon.png')}
                    style={styles.logo}
                  />
        }
                </View>
              </TouchableOpacity>
            </View>
          );
        })}

        <Text style={styles.errorText}>* These fields are required</Text>

    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("home")}>

          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Upload Options Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select upload option</Text>

            <Pressable style={styles.optionRow} onPress={() => uploadPhoto('camera')}>
              <Image source={require('../assets/icons/camera_ic.png')} style={styles.icon} />
              <Text style={styles.optionText}>Take a photo</Text>
            </Pressable>

            <Pressable style={styles.optionRow} onPress={() => uploadPhoto('gallery')}>
              <Image source={require('../assets/icons/gallery_ic.png')} style={styles.icon} />
              <Text style={styles.optionText}>Choose from gallery</Text>
            </Pressable>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultCard: {
    backgroundColor: '#f9f9f9',
  },
  uploadedCard: {
    backgroundColor: '#e5e9ff',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
  uploadIcon: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeUpload: {
    backgroundColor: '#3b4ffe',
  },
  inactiveUpload: {
    backgroundColor: '#eee',
    borderRadius:50
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 13,
    fontStyle: 'italic',
  },
  nextButton: {
    backgroundColor: '#3b4ffe',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 15,
  },
  cancelButton: {
    marginTop: 15,
    backgroundColor: '#f8f8f8',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  cancelText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default MyDocumentScreen;
