import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Practica firebase</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// API_KEY = AIzaSyCfzo3iGr2YRtoH2r7n-l5UQ2BuAB3UFfg
// AUTH_DOMAIN = practica-firebase-20220075.firebaseapp.com
// PROJECT_ID = practica-firebase-20220075
// STORAGE_BUCKET = practica-firebase-20220075.appspot.com
// MESSAGING_SENDER_ID = 930261289191
// APP_ID = 1:930261289191:web:c2e59bdeaca18d4b573a42