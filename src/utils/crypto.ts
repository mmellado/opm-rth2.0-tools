import Crypto from 'crypto-js';
import { Hero } from '@data/types';

const secret = 'r04dt0her0';

export const encryptData = (data: string): string => {
  return Crypto.AES.encrypt(data, secret).toString();
};

export const decryptData = (encryptedData: string): string => {
  const bytes = Crypto.AES.decrypt(encryptedData, secret);
  return bytes.toString(Crypto.enc.Utf8);
};

export const encryptTeam = (data: Hero[]): string => {
  const teamString = data.map((h) => `${h.heroId}:${h.currentRank}`).join('-');
  return encodeURIComponent(encryptData(teamString));
};

export const decryptTeamID = (encryptedData: string): string => {
  return decryptData(decodeURIComponent(encryptedData));
};

export const decryptTeam = (teamId: string): string[] => {
  return teamId.split('-');
};
