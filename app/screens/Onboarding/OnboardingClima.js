import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Mudei o nome do componente para OnboardingClima (era "App")
export default function OnboardingClima({ onNext, onBack }) {
  const weatherData = [
    {
      temp: '19°',
      location: 'Montreal, Canada',
      condition: 'Mid Rain',
      icon: 'https://img.icons8.com/color/96/rain.png',
    },
    {
      temp: '20°',
      location: 'Toronto, Canada',
      condition: 'Fast Wind',
      icon: 'https://img.icons8.com/color/96/wind.png',
    },
    {
      temp: '13°',
      location: 'Tokyo, Japan',
      condition: 'Showers',
      icon: 'https://img.icons8.com/color/96/rain-cloud.png',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <FontAwesome name="bicycle" size={24} color="white" />
        <Text style={styles.title}>O clima não está bom?</Text>
        <Text style={styles.subtitle}>Evite imprevistos.</Text>
      </View>

      {/* Cartões de clima */}
      <ScrollView style={styles.cardsContainer} showsVerticalScrollIndicator={false}>
        {weatherData.map((item, index) => (
          <View key={index} style={styles.card}>
            <View>
              <Text style={styles.temp}>{item.temp}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <View style={styles.rightSide}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.condition}>{item.condition}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navegação - ADICIONEI onNext e onBack nos botões */}
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
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 13,
  },
  cardsContainer: {
    marginTop: 20,
    flexGrow: 0,
  },
  card: {
    backgroundColor: '#8B0000',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 13,
    color: '#eee',
    marginTop: 4,
  },
  rightSide: {
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
  condition: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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