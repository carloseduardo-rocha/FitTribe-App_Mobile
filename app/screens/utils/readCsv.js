import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';

export async function loadCorridasData() {
  try {
    const url = 'https://teusite.com/eventos_corrigidos.csv';
    const fileUri = FileSystem.documentDirectory + 'eventos.csv';

    const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
    await downloadResumable.downloadAsync();

    const conteudo = await FileSystem.readAsStringAsync(fileUri);

    const resultado = Papa.parse(conteudo, {
      header: true,
      skipEmptyLines: true,
    });

    console.log('🎯 Dados baixados:', resultado.data);
    return resultado.data;
  } catch (err) {
    console.error('❌ Erro ao baixar CSV:', err);
    return [];
  }
}
