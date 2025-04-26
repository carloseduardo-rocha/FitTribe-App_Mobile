import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    Alert.alert('Login realizado');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.topSection}>
        <Text style={styles.title}>Hey!</Text>
        <Text style={styles.subtitle}>Bem-Vindo de volta!</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.tabContainer}>
          <Text style={styles.activeTab}>Login</Text>
          <Text style={styles.inactiveTab}>Registrar</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esquece Senha</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>Terms & Conditions Apply*</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F3F0' },
  topSection: {
    backgroundColor: '#3A1D1D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 2,
    padding: 30,
    backgroundColor: '#FDFDFB',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#999',
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  terms: {
    color: '#444',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});