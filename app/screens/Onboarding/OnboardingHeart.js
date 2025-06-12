import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

// Mudei o nome do componente para OnboardingHeart (era "App")
export default function OnboardingHeart({ onNext, onBack }) {
  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <FontAwesome name="heartbeat" size={24} color="#FF3E6C" />
        <Text style={styles.title}>SUA SAÚDE EM PRIMEIRO LUGAR!</Text>
      </View>

      {/* Coração e linha */}
      <View style={styles.heartContainer}>
        <FontAwesome name="heart" size={50} color="#FF3E6C" />
        <View style={styles.line} />
      </View>

      {/* Indicadores */}
      <View style={styles.statsContainer}>
        <HealthStat value="145" label="SYS Média máx às 08:30" progress={0.9} />
        <HealthStat value="075" label="SYS Normal" progress={0.5} />
        <HealthStat value="098" label="SYS Medição anterior" progress={0.7} />
      </View>

      {/* Círculo de porcentagem */}
      <View style={styles.circleSimulated}>
        <View style={styles.circleInner}>
          <Text style={styles.circleText}>75%</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>SEU CORPO É SEU MELHOR EQUIPAMENTO</Text>

      {/* Navegação - ADICIONEI onNext e onBack */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.navText}>‹ Voltar</Text>
        </TouchableOpacity>
        
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        
        <TouchableOpacity onPress={onNext}>
          <Text style={styles.navText}>Ir para Login ›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Componente HealthStat (mantido igual)
function HealthStat({ value, label, progress }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styles.statRow}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
      <ProgressBar progress={progress} color="#FF3E6C" style={styles.progressBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },
  heartContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: '#999',
    marginTop: 12,
  },
  statsContainer: {
    marginTop: 24,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },
  statValue: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  progressBar: {
    height: 6,
    borderRadius: 10,
    backgroundColor: '#333',
    marginTop: 6,
  },
  circleSimulated: {
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#FF3E6C',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  circleInner: {
    backgroundColor: '#111',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  navigation: {
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
    backgroundColor: '#FF3E6C',
  },
});