import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

const VerificationCodeScreen = ({ navigation, route }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [resendAvailable, setResendAvailable] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputs = useRef([]);
  
  const email = route?.params?.email || 'seu-email@exemplo.com';

  useEffect(() => {
    if (countdown > 0 && !resendAvailable) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendAvailable(true);
    }
  }, [countdown, resendAvailable]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    alert(`Código reenviado para: ${email}`);
    setResendAvailable(false);
    setCountdown(30);
  };

  const handleSubmit = () => {
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      alert(`Código ${fullCode} verificado!`);
      navigation.navigate('ResetPassword', { code: fullCode });  // Navega para Nova Senha com o código
    } else {
      alert('Por favor, preencha todos os dígitos do código');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>FitTribe</Text>
          <Text style={styles.subtitle}>Acabamos de enviar um código para seu e-mail</Text>
          <Text style={styles.description}>
            Insira no campo abaixo o código de verificação de 6 dígitos enviado para {email}
          </Text>
          
          <View style={styles.codeContainer}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => inputs.current[index] = ref}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                value={code[index]}
                onChangeText={(text) => handleCodeChange(text, index)}
                selectTextOnFocus
              />
            ))}
          </View>
          
          <TouchableOpacity 
            style={styles.resendContainer}
            onPress={resendAvailable ? handleResendCode : null}
            disabled={!resendAvailable}
          >
            <Text style={[styles.resendText, resendAvailable && styles.resendAvailable]}>
              Reenviar código? {!resendAvailable && `(${countdown}s)`}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
          
          <Text style={styles.tipText}>
            Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a pasta de Spam!
          </Text>
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
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 45,
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#999',
    fontSize: 14,
  },
  resendAvailable: {
    color: '#FF6B6B',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tipText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default VerificationCodeScreen;