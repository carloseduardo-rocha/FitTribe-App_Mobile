import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { loadCorridasData } from '../utils/readCsv';

export default function HomeScreen() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadCorridasData();
      console.log('🎯 Dados recebidos na HomeScreen:', data);
      setEventos(data);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item?.['Nome do Evento']}</Text>
      <Text style={styles.details}>
        {item?.['Data e Horário']} • {item?.Distância} • {item?.Local}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔥 Lista do CSV Local 🔥</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum evento encontrado.</Text>
        }
        contentContainerStyle={eventos.length === 0 && styles.centerEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginBottom: 4,
  },
  details: {
    color: '#555',
    fontSize: 14,
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
  centerEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
