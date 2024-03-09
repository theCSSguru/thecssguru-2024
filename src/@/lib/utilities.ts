import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const yearsOfExperience = () => {
  const STARTING_YEAR = 2008;
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear - STARTING_YEAR;
};
