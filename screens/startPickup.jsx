import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const StartPickupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Map background as image */}
      <Image
        source={require('../assets/map.png')} // <- your uploaded image
        style={styles.mapImage}
        resizeMode="cover"
      />

      {/* Top Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image source={require('../assets/icons/backicon.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Start Pickup</Text>
        <View style={{ width: 24 }} /> {/* spacer for symmetry */}
      </View>

      {/* Top Direction Box */}
      <View style={styles.directionBox}>
        <Text style={styles.distanceText}>📍 220 m</Text>
        <Text style={styles.directionText}>Turn left Neemuch RD. Gopalbari</Text>
      </View>

      {/* Bottom card over map */}
      <View style={styles.bottomCard}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../assets/icons/driver_pic.png')}
            style={styles.avatar}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>Hello Frank</Text>
            <Text style={styles.subInfo}>15 Min &nbsp; ⭐ 4.0</Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.circleIcon}>
              <Image source={require('../assets/icons/phone_ic.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleIcon}>
              <Image source={require('../assets/icons/mess_ic.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Route Points */}
        <View style={styles.routeRow}>
          <View style={styles.dotActive} />
          <Text style={styles.time}>02:10 PM</Text>
          <TextInput
            style={styles.input}
            defaultValue="Neemuch RD. Gopalbari, Bari Sad"
          />
        </View>
        <View style={styles.routeRow}>
          <View style={styles.dotInactive} />
          <Text style={styles.time}>02:30 PM</Text>
          <TextInput
            style={styles.input}
            defaultValue="RD. Gopalbari, Bari Sad"
          />
        </View>

        {/* Start Pickup Button */}
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("endPickup")}>
          <Text style={styles.startButtonText}>Start Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartPickupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapImage: {
    position: 'absolute',
    width: '100%',
    height: screenHeight,
  },
  topHeader: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  directionBox: {
    backgroundColor: '#f96b4c',
    marginTop: 15,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  distanceText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  directionText: {
    color: '#fff',
    fontSize: 13,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subInfo: {
    fontSize: 13,
    color: '#777',
  },
  icons: {
    flexDirection: 'row',
  },
  circleIcon: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 25,
    marginLeft: 10,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dotActive: {
    width: 12,
    height: 12,
    backgroundColor: '#3b4ffe',
    borderRadius: 6,
    marginRight: 10,
  },
  dotInactive: {
    width: 12,
    height: 12,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginRight: 10,
  },
  time: {
    width: 60,
    fontSize: 13,
    color: '#333',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#3b4ffe',
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
