import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = ({ navigation }) => {

  const [imageUri, setImageUri] = useState('https://via.placeholder.com/150');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos acessar sua galeria para mudar a foto.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          <Image
            source={{ uri: imageUri }}
            style={styles.profileImage}
          />
          <View style={styles.cameraIcon}>
            <Icon name="photo-camera" size={20} color="#FFF" />
          </View>
        </TouchableOpacity>
        
        <Text style={styles.name}>Atleta FitTribe</Text>
        <Text style={styles.email}>atleta@fittribe.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Corridas</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statValue}>0 km</Text>
          <Text style={styles.statLabel}>Distância</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Medalhas</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={20} color="#C1121F" style={styles.buttonIcon} />
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximas Corridas</Text>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>5K Run FitTribe</Text>
            <Text style={styles.eventDate}>15 Out 2023 • 08:00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: 'center',
    backgroundColor: '#C1121F',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  imageContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#C1121F',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -20,
    marginHorizontal: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#C1121F',
  },
  statLabel: {
    fontSize: 14,
    color: '#AAA',
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#C1121F',
    borderRadius: 25,
    paddingVertical: 12,
    marginBottom: 25,
  },
  buttonIcon: {
    marginRight: 8,
  },
  editButtonText: {
    color: '#C1121F',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C1121F',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#AAA',
  },
});

export default ProfileScreen;
