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



