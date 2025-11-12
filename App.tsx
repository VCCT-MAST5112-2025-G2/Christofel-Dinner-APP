import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput,
  Image, ScrollView, Alert, Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const logoImg = require('./assets/67.jpg');

const T = {
  background: '#020202',
  panel: '#111',
  text: '#ffffff',
  muted: '#bdb9b0',
  accent: '#ffffff',
  buttonBg: '#f5f3f8',
  buttonText: '#000',
};

const STORAGE_KEY = '@menu_items_v1';

async function loadItems() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('loadItems err', e);
    return [];
  }
}
async function saveItems(items: any[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('saveItems err', e);
  }
}
//Home
function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.app} contentContainerStyle={styles.centerScroll}>
      <StatusBar style="light" />
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.title}>Christoffel Dinner</Text>
      <Text style={styles.hint}>Welcome</Text>

      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('Menu')} 
      >
        <Text style={styles.bigButtonText}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('Owner')}
      >
        <Text style={styles.bigButtonText}>Owner</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// Style sheet
const styles = StyleSheet.create({

  app: 
  { flex: 1,
   backgroundColor: T.background 
  },

  centerScroll: 
  { alignItems: 'center', 
    paddingTop: 40, 
    paddingBottom: 60 },

  logo: { width: 120, 
    height: 120, 
    borderRadius: 12, 
    marginBottom: 18 },

  title: { color: T.text, 
    fontSize: 22,
     fontWeight: '700', 
     marginBottom: 6 },

  hint: { color: T.muted, 
    fontSize: 14, 
    marginBottom: 14,
     textAlign: 'center',
      paddingHorizontal: 20 },

  bigButton: { width: '85%',
     backgroundColor: T.buttonBg,
      paddingVertical: 12, 
      borderRadius: 10, 
      alignItems: 'center',
       marginTop: 12 },

  bigButtonText: { color: T.buttonText, 
    fontWeight: '700' },

  navBar: { flexDirection: 'row', 
    justifyContent: 'space-around',
     backgroundColor: T.panel,
      paddingVertical: 10, 
      width: '92%', 
      borderRadius: 12,
       marginTop: 18 },

  navItem: { paddingVertical: 8,
     paddingHorizontal: 12,
      borderRadius: 8 },


  navItemActive: { backgroundColor: T.accent, 
    borderRadius: 8,
     paddingVertical: 8, 
     paddingHorizontal: 12 },

  navText: { color: T.text,
     fontWeight: '700' },

  navTextActive: { color: '#000', 
    fontWeight: '800' },

  card: { width: '92%',
     backgroundColor: T.panel,
      borderRadius: 12, 
      padding: 14,
       marginTop: 16 },

  dishImg: { width: '100%',
     height: 170,
      borderRadius: 10, 
      marginBottom: 10 },

  dishTitle: { color: T.text,
     fontSize: 18, 
     fontWeight: '700' },

  dishDesc: { color: T.muted, 
    marginTop: 6,
     marginBottom: 8 },

  price: { color: T.accent, 
    fontWeight: '800' },

  input: { width: '92%',
     backgroundColor: T.panel,
      color: T.text, 
      padding: 12, 
      borderRadius: 10, 
      alignSelf: 'center',
       marginTop: 12 },

  imagePicker: { width: '92%',
     height: 160,
      backgroundColor: T.panel,
       borderRadius: 12,
        alignSelf: 'center',
         marginTop: 12, 
         justifyContent: 'center', 
         alignItems: 'center', 
         borderWidth: 1,
          borderColor: '#222' },

  editButton: { backgroundColor: '#4caf50',
     padding: 8, borderRadius: 8, 
     flex: 1, 
     alignItems: 'center', 
     marginRight: 6 },
  
  deleteButton: { backgroundColor: '#f44336',
     padding: 8,
      borderRadius: 8, 
      flex: 1, 
      alignItems: 'center' },
});

