import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  Modal,
  Button,
  Alert
} from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  const checkUsernameAvailability = () => {
    const available = username.length >= 3;
    setUsernameAvailable(available);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(validateEmail(text));
  };

  const formatDate = (date) => {
    if (!date) return 'Data de nascimento';
    return date.toLocaleDateString('pt-BR');
  };

  const handleSignup = () => {
    if (!emailValid || !usernameAvailable || password !== confirmPassword || !birthDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente');
      return;
    }

    fetch('http://192.168.3.10:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: username,
        email,
        password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        Alert.alert('Erro', data.error);
      } else {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      }
    })
    .catch(() => {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.logo}>FitTribe</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {email.length > 0 && (
              <Text style={[
                styles.availabilityText,
                emailValid ? styles.available : styles.unavailable
              ]}>
                {emailValid ? 'email válido' : 'email inválido'}
              </Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              placeholderTextColor="#999"
              value={username}
              onChangeText={setUsername}
              onEndEditing={checkUsernameAvailability}
              autoCapitalize="none"
            />
            {username.length > 0 && (
              <Text style={[
                styles.availabilityText,
                usernameAvailable ? styles.available : styles.unavailable
              ]}>
                {usernameAvailable ? 'disponível' : 'indisponível'}
              </Text>
            )}
          </View>

          <TouchableOpacity 
            style={styles.input} 
            onPress={() => setShowDateModal(true)}
          >
            <Text style={birthDate ? styles.dateText : styles.placeholderText}>
              {formatDate(birthDate)}
            </Text>
          </TouchableOpacity>

          <Modal
            visible={showDateModal}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Button title="Cancelar" onPress={() => setShowDateModal(false)} />
                  <Button title="Confirmar" onPress={() => {
                    setBirthDate(tempDate);
                    setShowDateModal(false);
                  }} />
                </View>
                <Text style={{ height: 200, textAlign: 'center', paddingTop: 80 }}>
                  Seletor de Data (implementação nativa)
                </Text>
              </View>
            </View>
          </Modal>

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {password.length > 0 && confirmPassword.length > 0 && (
            <Text style={[
              styles.validationText,
              password === confirmPassword ? styles.valid : styles.invalid
            ]}>
              {password === confirmPassword ? 'as senhas são iguais' : 'as senhas não coincidem'}
            </Text>
          )}

          <TouchableOpacity 
            style={[
              styles.signupButton,
              (!emailValid || !usernameAvailable || password !== confirmPassword || !birthDate) && styles.disabledButton
            ]}
            onPress={handleSignup}
            disabled={!emailValid || !usernameAvailable || password !== confirmPassword || !birthDate}
          >
            <Text style={styles.signupButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  availabilityText: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 12,
  },
  available: {
    color: '#4CAF50',
  },
  unavailable: {
    color: '#F44336',
  },
  validationText: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center',
  },
  valid: {
    color: '#4CAF50',
  },
  invalid: {
    color: '#F44336',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
