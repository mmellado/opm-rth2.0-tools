import SimpleCrypto, { PlainData } from 'simple-crypto-js';

const crypto = new SimpleCrypto('r04dt0her0');

export const encryptData = (data: PlainData): string => {
  return crypto.encrypt(data);
};

export const decryptData = (encryptedData: string): PlainData => {
  return crypto.decrypt(encryptedData);
};
