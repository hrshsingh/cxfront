import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

const requestData = [
  {
    id: '1',
    name: 'Hello Frank',
    profile: require('../assets/icons/driver_pic.png'),
    time: '15 Min',
    rating: 4.0,
    amount: '$20',
    distance: '2.4km',
    pickupTime: '02:10 PM',
    pickupLocation: 'Neemuch RD. Gopalbari, Bari Sad',
    dropTime: '02:30 PM',
  },
  {
    id: '2',
    name: 'Hello Frank',
    profile: require('../assets/icons/driver_pic.png'),
    time: '15 Min',
    rating: 4.0,
    amount: '$20',
    distance: '2.4km',
    pickupTime: '02:10 PM',
    pickupLocation: 'Neemuch RD. Gopalbari, Bari Sad',
    dropTime: '02:30 PM',
  },
];

const HomeDashboard = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Image source={require('../assets/icons/ic_menu.png')} />
        </TouchableOpacity>
      </View>

         <View style={styles.profileRow}>
          <Image
            source={require('../assets/icons/driver_pic.png')}
            style={styles.profileImg}
          />
          <View>
            <Text style={styles.welcome}>Hello Frank</Text>
            <Text style={styles.location}>Dublin US ▼</Text>
          </View>
        </View>

      {/* Summary Boxes */}
      <View style={styles.summaryBox}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>$320</Text>
          <Text style={styles.summaryLabel}>Overall earning</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>2</Text>
          <Text style={styles.summaryLabel}>Today Booking</Text>
        </View>
      </View>

      {/* New Request Header */}
      <View style={styles.requestHeader}>
        <Text style={styles.requestTitle}>New Request</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Request Cards */}
      {requestData.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Image source={item.profile} style={styles.avatar} />
            <View style={styles.headerInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subInfo}>
                {item.time} &nbsp; ⭐ {item.rating}
              </Text>
            </View>
            <View style={styles.amountBox}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
          </View>

          <View style={styles.routeBox}>
            <View style={styles.pointRow}>
              <View style={styles.dotActive} />
              <Text style={styles.time}>{item.pickupTime}</Text>
              <TextInput
                style={styles.input}
                defaultValue={item.pickupLocation}
              />
            </View>
            <View style={styles.pointRow}>
              <View style={styles.dotInactive} />
              <Text style={styles.time}>{item.dropTime}</Text>
              <TextInput style={styles.input} placeholder="Enter Destination" />
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.declineBtn}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptBtn} onPress={() =>   navigation.navigate("startPickup")}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fc',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: {
    marginVertical:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  welcome: {
    fontSize: 13,
    color: '#999',
  },
  location: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  summaryCard: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryLabel: {
    color: '#666',
    marginTop: 5,
    fontSize: 13,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#3b4ffe',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subInfo: {
    fontSize: 13,
    color: '#777',
  },
  amountBox: {
    alignItems: 'flex-end',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  distance: {
    fontSize: 12,
    color: '#999',
  },
  routeBox: {
    marginVertical: 10,
  },
  pointRow: {
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
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  declineBtn: {
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  declineText: {
    color: '#f00',
    fontWeight: '600',
  },
  acceptBtn: {
    backgroundColor: '#3b4ffe',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  acceptText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default HomeDashboard;
