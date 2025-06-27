import React, { useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, Alert, Platform 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = ({ user }) => {
  const placeholder = 'https://via.placeholder.com/150';

  const [imageUri, setImageUri] = useState(user?.profilePicture || null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (cameraStatus.status !== 'granted' || mediaStatus.status !== 'granted') {
          Alert.alert('Permissões necessárias', 'Precisamos de permissão para acessar a câmera e a galeria.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaType.Images,
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Erro ao abrir galeria:', error);
    }
  };

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Erro ao abrir câmera:', error);
    }
  };

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
      <Text style={styles.greeting}>Bem-vindo, {user?.username || 'Atleta'} 👋</Text>

      <TouchableOpacity onPress={handleEditPhoto} activeOpacity={0.8}>
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
        activeOpacity={0.8}
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
    backgroundColor: '#000', // Fundo preto, estilo FitTribe
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 25,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#E10600', // Vermelho do FitTribe
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
  },
  editButton: {
    backgroundColor: '#E10600',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#E10600',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProfileScreen;
