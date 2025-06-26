import React, { useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, Alert, Platform 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = ({ user }) => {
  const placeholder = 'https://via.placeholder.com/150';
  
  const [imageUri, setImageUri] = useState(user?.profilePicture || null);

  // Pede permissão para galeria e câmera no Android/iOS
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (cameraStatus.status !== 'granted' || mediaStatus.status !== 'granted') {
          Alert.alert('Permissões necessárias', 'Precisamos da permissão para acessar sua câmera e galeria.');
        }
      }
    })();
  }, []);

  // Função para pegar foto da galeria
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaType.Images,
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        // Aqui você pode salvar no backend ou banco local depois
      }
    } catch (error) {
      console.log('Erro ao abrir galeria:', error);
    }
  };

  // Função para tirar foto com a câmera
  const takePhoto = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        // Salvar foto depois
      }
    } catch (error) {
      console.log('Erro ao abrir câmera:', error);
    }
  };

  // Menu simples de escolha
  const handleEditPhoto = () => {
    Alert.alert(
      'Editar Foto',
      'Escolha uma opção',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Escolher da galeria', onPress: pickImage },
        { text: 'Tirar foto', onPress: takePhoto },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {user?.username || 'Usuário'}!! 👋</Text>

      <TouchableOpacity onPress={handleEditPhoto} activeOpacity={0.7}>
        <Image
          source={{ uri: imageUri || placeholder }}
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <Text style={styles.name}>{user?.username || 'Carlos Eduardo'}</Text>
      <Text style={styles.email}>{user?.email || 'cadu@email.com'}</Text>

      <TouchableOpacity
        style={styles.editButton}
        onPress={handleEditPhoto}
        activeOpacity={0.7}
      >
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: 25,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProfileScreen;
