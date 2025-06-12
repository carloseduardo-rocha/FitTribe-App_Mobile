import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function OnboardingMap({ onNext, onBack}) {
  return (
    <View style={styles.container}>
      {/* Ícone e título */}
      <View style={styles.header}>
        <FontAwesome name="bicycle" size={24} color="white" />
        <Text style={styles.title}>Conheça os caminhos para correr!</Text>
      </View>

      {/* Mapa simulado */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/OpenStreetMap_High_Detail.png/480px-OpenStreetMap_High_Detail.png' }}
          style={styles.map}
          resizeMode="cover"
        />
        <MaterialIcons name="location-pin" size={32} color="red" style={styles.pin} />
      </View>

      {/* Texto descritivo */}
      <Text style={styles.description}>Descubra eventos exclusivos!</Text>

      {/* Navegação */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.navText}>‹ Voltar</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity onPress={onNext}>
          <Text style={styles.navText}>Continuar ›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
  },
  mapContainer: {
    width: width * 0.85,
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#333',
  },
  map: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  pin: {
    position: 'absolute',
    top: '48%',
    left: '48%',
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
  },
  navigation: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navText: {
    color: '#bbb',
    fontSize: 14,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#555',
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
});