// app/App.js (або app/(tabs)/index.tsx для tabs-шаблону)
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';

export default function App() {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const toastOpacity = useState(new Animated.Value(0))[0];

  const showToast = () => {
    setToastVisible(true);
    Animated.timing(toastOpacity, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(toastOpacity, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(() => setToastVisible(false));
      }, 1500);
    });
  };

  const fetchData = () => {
    setLoadingVisible(true);
    setTimeout(() => setLoadingVisible(false), 3000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setConfirmVisible(true)}>
        <Text style={styles.buttonText}>Confirm Action</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setErrorVisible(true)}>
        <Text style={styles.buttonText}>Show Error</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showToast}>
        <Text style={styles.buttonText}>Toast Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Fetch Data...</Text>
      </TouchableOpacity>

      {/* Confirm Modal */}
      <Modal transparent visible={confirmVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.okButton} onPress={() => setConfirmVisible(false)}>
                <Text style={styles.okText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setConfirmVisible(false)}>
                <Text style={styles.cancelText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal transparent visible={errorVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={[styles.modalBox, styles.errorBox]}>
            <Text style={styles.modalTitle}>Error occurred!</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.okButton} onPress={() => setErrorVisible(false)}>
                <Text style={styles.okText}>Fix it</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setErrorVisible(false)}>
                <Text style={styles.cancelText}>Ignore</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Loading Modal */}
      <Modal transparent visible={loadingVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>

      {/* Toast */}
      {toastVisible && (
        <Animated.View style={[styles.toast, { opacity: toastOpacity }]}>
          <Text style={styles.toastText}>Something happened!</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  errorBox: {
    backgroundColor: '#f8d7da',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  okButton: {
    padding: 10,
  },
  cancelButton: {
    padding: 10,
  },
  okText: {
    color: '#007AFF',
    fontSize: 16,
  },
  cancelText: {
    color: '#007AFF',
    fontSize: 16,
  },
  loadingBox: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  toast: {
    position: 'absolute',
    bottom: 100,         // піднято над таб-баром
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,        // поверх всіх
    elevation: 1000,     // Android-аналог zIndex
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  toastText: {
    color: '#fff',
  },
});
