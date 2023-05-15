import { atom } from '@reatom/core';

export const spaAtom = atom<Window['gpnAnalytics'] | undefined>(undefined);
