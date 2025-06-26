import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { loadCorridasData } from '../utils/readCsv';

export default function HomeScreen() {
  const [eventos, setEventos] = useState([]);
  const [mesSelecionado, setMesSelecionado] = useState('Todos');
  
  const meses = [
    'Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadCorridasData();
      const eventosValidos = data.filter(item => 
        item?.['Data e Horário'] && item?.['Nome do Evento']
      );
      setEventos(eventosValidos);
    };

    fetchData();
  }, []);

  const filtrarPorMes = (eventos) => {
    if (mesSelecionado === 'Todos') return eventos;

    return eventos.filter((item) => {
      const dataString = item?.['Data e Horário'];
      if (!dataString) return false;

      const partesData = dataString.split('/');
      if (partesData.length < 2) return false;

      const mesNumero = parseInt(partesData[1], 10);
      const nomeMes = meses[mesNumero];

      return nomeMes === mesSelecionado;
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Ionicons name="walk-outline" size={20} color="#4CAF50" style={styles.icon} />
        <Text style={styles.title}>{item?.['Nome do Evento']}</Text>
      </View>
      <Text style={styles.details}>
        {item?.['Data e Horário']} • {item?.['Distâncias']} • {item?.['Local']}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏃‍♂️ Próximos Eventos</Text>

      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>Filtrar por mês:</Text>
        <Picker
          selectedValue={mesSelecionado}
          style={styles.picker}
          onValueChange={(itemValue) => setMesSelecionado(itemValue)}
          itemStyle={styles.pickerItem}
        >
          {meses.map((mes) => (
            <Picker.Item key={mes} label={mes} value={mes} color="#333" />
          ))}
        </Picker>
      </View>

      <FlatList
        data={filtrarPorMes(eventos)}
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
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    // alignItems removido para usar toda a largura
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#222',
  },
  filtroContainer: {
    marginBottom: 15,
    width: '100%', // ocupa toda largura para filtro
  },
  filtroLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    height: 40,
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderRadius: 8,
    color: '#333',
  },
  pickerItem: {
    fontSize: 16,
    color: '#333',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
    // width removido para deixar responsivo
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    flexShrink: 1,
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
