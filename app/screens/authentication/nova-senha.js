import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };

  const handlePasswordChange = (password) => {
    setNewPassword(password);
    setPasswordValid(validatePassword(password));
    setPasswordsMatch(password === confirmPassword);
  };

  const handleConfirmPasswordChange = (password) => {
    setConfirmPassword(password);
    setPasswordsMatch(newPassword === password);
  };

  const handleResetPassword = () => {
    if (!passwordValid) {
      alert('A senha deve conter pelo menos 8 caracteres, incluindo letras e números');
      return;
    }
    if (!passwordsMatch) {
      alert('As senhas não coincidem');
      return;
    }
    
    alert('Senha redefinida com sucesso!');
    navigation.navigate('Login');  // Navega de volta para Login
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.logo}>FitTribe</Text>
          <Text style={styles.title}>Crie sua nova senha!</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            placeholderTextColor="#999"
            value={newPassword}
            onChangeText={handlePasswordChange}
            secureTextEntry
            autoCapitalize="none"
          />
          
          <Text style={styles.passwordExample}>Ex: Pet.Journal@1d3d456789</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            secureTextEntry
            autoCapitalize="none"
          />
          
          {newPassword && confirmPassword && !passwordsMatch && (
            <Text style={styles.errorText}>As senhas estão diferentes, verifique</Text>
          )}
          
          <Text style={styles.infoText}>
            É necessário que todos os dispositivos acessem sua conta com a nova senha
          </Text>
          
          <TouchableOpacity 
            style={[
              styles.resetButton,
              (!passwordValid || !passwordsMatch) && styles.disabledButton
            ]}
            onPress={handleResetPassword}
            disabled={!passwordValid || !passwordsMatch}
          >
            <Text style={styles.resetButtonText}>Redefinir senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  passwordExample: {
    fontSize: 12,
    color: '#999',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    color: '#F44336',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;