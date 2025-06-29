import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Langauge = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState('English');

  const languages = [
    'English', 'Hindi', 'Spanish', 'Arabic', 'French', 'Turkish',
    'Russian', 'Italian', 'German', 'Korean', 'Chinese(PRC)'
  ];

  const handleSave = () => {
    console.log("Selected Language:", selectedLang);
    // You could store it in AsyncStorage, Redux, or context
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>

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
  );
};

export default Langauge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  langText: {
    fontSize: 16,
    color: '#333',
  },
  saveBtn: {
    marginTop: 30,
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
