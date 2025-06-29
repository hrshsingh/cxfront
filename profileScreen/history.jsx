import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


const historyData = [
  {
    id: '1',
    status: 'Completed',
    amount: '$52',
    date: '02/05/2022',
    from: 'Neemuch RD. Gopalbari, Bari Sad',
    to: 'Jawahar Lal Nehru Marg, D-Block',
    statusColor: '#d4f8e8',
    statusTextColor: '#28c76f',
    dotColor: '#f4c542',
  },
  {
    id: '2',
    status: 'Cancel',
    amount: '$10',
    date: '08/05/2022',
    from: 'Neemuch RD. Gopalbari, Bari Sad',
    to: 'Jawahar Lal Nehru Marg, D-Block',
    statusColor: '#fce6e6',
    statusTextColor: '#f34f4f',
    dotColor: '#3b32ff',
  },
];

export default function HistoryScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
        <Text style={[styles.statusText, { color: item.statusTextColor }]}>{item.status}</Text>
      </View>

      <View style={styles.routeContainer}>
        <View style={styles.routeRow}>
          <View style={[styles.dot, { backgroundColor: item.dotColor }]} />
          <Text style={styles.address}>{item.from}</Text>
        </View>
        <View style={styles.routeRow}>
          <View style={[styles.dot, { backgroundColor: '#000' }]} />
          <Text style={styles.address}>{item.to}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
      
         <Image source={require('../assets/icons/backicon.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>

      {/* History List */}
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fc',
    paddingTop: 50,
    paddingHorizontal: 16,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  routeContainer: {
    marginBottom: 16,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  address: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
});
