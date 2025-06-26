import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Platform,
} from 'react-native';
import MapView, { Marker, UrlTile, PROVIDER_DEFAULT } from 'react-native-maps';

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: -3.71722, // Fortaleza
    longitude: -38.5433,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [searchText, setSearchText] = useState('');
  const [markerCoord, setMarkerCoord] = useState(null);
  const mapRef = useRef(null);

  const buscarLocal = async () => {
    if (!searchText.trim()) return;

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchText
      )}`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'FitTribeApp/1.0 (cadu@email.com)',
          'Accept': 'application/json',
        },
      });

      const data = await response.json();

      if (data && data.length > 0) {
        const lugar = data[0];
        const newRegion = {
          latitude: parseFloat(lugar.lat),
          longitude: parseFloat(lugar.lon),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };

        setRegion(newRegion);
        setMarkerCoord({ latitude: newRegion.latitude, longitude: newRegion.longitude });

        // Centraliza o mapa no resultado, se existir a referência
        if (mapRef.current) {
          mapRef.current.animateToRegion(newRegion, 1000);
        }

        Keyboard.dismiss();
      } else {
        alert('Local não encontrado.');
      }
    } catch (error) {
      alert('Erro ao buscar local.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar local (ex: Praça da Imprensa)"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={buscarLocal}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
        <TouchableOpacity onPress={buscarLocal} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      <MapView
        ref={mapRef}
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation={true}
        showsCompass={true}
        showsScale={true}
        loadingEnabled={true}
      >
        {/* Tiles do OpenStreetMap via UrlTile */}
        <UrlTile
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />

        {/* Marcador no local buscado */}
        {markerCoord && (
          <Marker
            coordinate={markerCoord}
            title="Local buscado"
            description={searchText}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
  },
  searchButtonText: {
    fontSize: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
