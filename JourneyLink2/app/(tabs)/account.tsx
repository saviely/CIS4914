import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const drives = [
  { id: '1', date: '2023-09-10', location: 'City A to City B', duration: '2 hrs' },
  { id: '2', date: '2023-08-21', location: 'City C to City D', duration: '1.5 hrs' },
];

const rides = [
  { id: '1', date: '2023-09-08', location: 'City E to City F', duration: '3 hrs' },
  { id: '2', date: '2023-08-19', location: 'City G to City H', duration: '2 hrs' },
];

const reviews = [
  { id: '1', user: 'John Doe', comment: 'Great driver!', rating: 5 },
  { id: '2', user: 'Jane Smith', comment: 'Smooth ride, very punctual.', rating: 4 },
];

const AccountScreen = () => {
  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.date}</Text>
      <Text style={styles.cardText}>{item.location}</Text>
      <Text style={styles.cardText}>Duration: {item.duration}</Text>
    </View>
  );

  const renderReviewCard = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.user}</Text>
      <Text style={styles.cardText}>{item.comment}</Text>
      <View style={styles.starContainer}>
        {[...Array(item.rating)].map((_, i) => (
          <FontAwesome key={i} name="star" size={16} color="gold" />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://your-profile-image-url.com' }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome key={i} name="star" size={24} color="gold" />
          ))}
        </View>
      </View>

      {/* Drive History */}
      <Text style={styles.sectionTitle}>Drive History</Text>
      <FlatList
        data={drives}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      />

      {/* Ride History */}
      <Text style={styles.sectionTitle}>Ride History</Text>
      <FlatList
        data={rides}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      />

      {/* Reviews */}
      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={renderReviewCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    minWidth: 200,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default AccountScreen;