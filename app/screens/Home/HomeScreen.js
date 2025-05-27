// /app/screens/Home/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const carregarEventos = async () => {
      try {
        const response = await fetch('http://192.168.3.10:3000/eventos'); // teu IP aqui
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    carregarEventos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FitTribe!</Text>
      
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.eventoCard}>
            <Image 
              source={{ uri: 'https://img.icons8.com/color/96/running--v1.png' }} 
              style={styles.eventoIcone}
            />
            <View style={styles.eventoInfo}>
              <Text style={styles.eventoNome}>{item.nome}</Text>
              <Text style={styles.eventoDetalhes}>{item.local} • {item.data} às {item.horario}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.lista}
      />
      
      <TouchableOpacity 
        style={styles.mapaButton}
        onPress={() => navigation.navigate('Map')}
      >
        <Image 
          source={{ uri: 'https://img.icons8.com/ios-filled/50/map-marker.png' }} 
          style={styles.mapaIcon}
        />
        <Text style={styles.mapaButtonText}>Ver Mapa Completo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF6B6B',
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 20,
  },
  eventoCard: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  eventoIcone: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  eventoInfo: {
    flex: 1,
  },
  eventoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventoDetalhes: {
    fontSize: 14,
    color: '#666',
  },
  mapaButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapaIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  mapaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
