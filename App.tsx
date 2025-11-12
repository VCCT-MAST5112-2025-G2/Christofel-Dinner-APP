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
      <Image source={logoImg} style={styles.lo  go} />
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

