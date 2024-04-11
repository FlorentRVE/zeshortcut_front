// ============================ Context ========================

import { createContext } from "react";

export const NomContext = () => {
  return createContext<{
    nom: string;
    setNom: (value: string) => void;
  }>({
    nom: "",
    setNom: () => null,
  });
};

export const AgeContext = () => {
  return createContext<{
    age: number;
    setAge: (value: number) => void;
  }>({
    age: 0,
    setAge: () => null,
  });
};

export const CalorieContext = () => {
  return createContext<{
    calorie: number;
    setCalorie: (value: number) => void;
  }>({
    calorie: 0,
    setCalorie: () => null,
  });
};

export const TailleContext = () => {
  return createContext<{
    taille: number;
    setTaille: (value: number) => void;
  }>({
    taille: 0,
    setTaille: () => null,
  });
};

export const PoidsContext = () => {
  return createContext<{
    poids: number;
    setPoids: (value: number) => void;
  }>({
    poids: 0,
    setPoids: () => null,
  });
};


export const ActiviteContext = () => {
  return createContext<{
    activite: string;
    setActivite: (value: string) => void;
  }>({
    activite: "",
    setActivite: () => null,
  });
};

export const EmailContext = () => {
  return createContext<{
    email: string;
    setEmail: (value: string) => void;
  }>({
    email: "",
    setEmail: () => null,
  });
};

export const GenreContext = () => {
  return createContext<{
    genre: boolean;
    setGenre: (value: boolean) => void;
  }>({
    genre: false,
    setGenre: () => null,
  });
};

