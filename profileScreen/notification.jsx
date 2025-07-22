import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


const notifications = [
  { id: '1', type: 'System', message: 'Your booking #5445 has been successfully placed' },
  { id: '2', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
  { id: '3', type: 'System', message: 'Thank You! Your transaction is complete' },
  { id: '4', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
  { id: '5', type: 'System', message: 'Your booking #5445 has been successfully placed' },
  { id: '6', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
         <Image source={require('../assets/icons/backicon.png')}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8fe',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  type: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
});
