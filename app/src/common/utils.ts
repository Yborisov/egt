import { countryToVatPercentMap } from './consts';

export const debounce = (fn: (...args: any) => void, delay?: number) => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;

      fn(...args);
    }, delay);
  };
};

export const calculateVat = (sum: number, country: string) =>
  Math.round(sum * countryToVatPercentMap[country] * 100) / 100;
