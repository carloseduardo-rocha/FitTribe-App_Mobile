import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

export default function LoadEvents() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    carregarCSV();
  }, []);

  const carregarCSV = async () => {
    try {
      const asset = Asset.fromModule(require('../assets/eventos_corrigidos.csv'));
      await asset.downloadAsync(); // Garante que o arquivo tá acessível

      const fileUri = asset.localUri || asset.uri;
      const conteudo = await FileSystem.readAsStringAsync(fileUri);

      const resultado = Papa.parse(conteudo, {
        header: true,
        skipEmptyLines: true,
      });

      setEventos(resultado.data);
      console.log('🎯 Dados carregados:', resultado.data);
    } catch (error) {
      console.error('❌ Erro ao carregar CSV:', error);
    }
  };

  return null; // Aqui depois tu pode renderizar os eventos no mapa
}
