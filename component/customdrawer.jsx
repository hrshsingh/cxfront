// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
              <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
                <Image source={require("../assets/icons/ic_menu.png")}></Image>      
              </TouchableOpacity>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} // Avatar URL
          style={styles.avatar}
        />
        <Text style={styles.name}>Frank Smith</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    paddingVertical: 30,
    backgroundColor: '#3422F2',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    color:'white',
    padding:10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
      color:'white',
  },
  menuButton:{
    color:"white"
  }
});

export default CustomDrawerContent;
