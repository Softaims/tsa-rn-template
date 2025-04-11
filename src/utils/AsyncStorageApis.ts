import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'authTokens';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const storeTokenSecurely = async (tokens: Tokens): Promise<void> => {
  try {
    const tokenString = JSON.stringify(tokens);
    await AsyncStorage.setItem(TOKEN_KEY, tokenString);
    console.log('[OK] => Tokens stored securely');
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

export const retrieveTokenSecurely = async (): Promise<Tokens | null> => {
  try {
    const tokenString = await AsyncStorage.getItem(TOKEN_KEY);
    console.log('[OK] => Tokens retrieved securely');
    return tokenString ? JSON.parse(tokenString) : null;
  } catch (error) {
    console.error('Error retrieving tokens:', error);
    return null;
  }
};

export const removeTokenSecurely = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    console.log('[OK] => Tokens removed securely');
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};