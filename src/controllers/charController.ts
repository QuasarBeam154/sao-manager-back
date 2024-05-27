import { Request, Response } from 'express';

interface Character {
  id: number;
  name: string;
  race: string;
  class: string;
  level: number;
}

let characters: Character[] = [
  { id: 1, name: 'Kirito', race: 'Human', class: 'Swordsman', level: 50 },
  { id: 2, name: 'Asuna', race: 'Human', class: 'Healer', level: 48 },
];

export const getCharacters = (req: Request, res: Response) => {
  res.json(characters);
};

export const createCharacter = (req: Request, res: Response) => {
  const newCharacter: Character = req.body;
  characters.push({ ...newCharacter, id: characters.length + 1 });
  res.status(201).json(newCharacter);
};

export const updateCharacter = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = characters.findIndex(c => c.id === parseInt(id));
  if (index >= 0) {
    characters[index] = { ...characters[index], ...req.body };
    res.json(characters[index]);
  } else {
    res.status(404).json({ message: 'Character not found' });
  }
};

export const deleteCharacter = (req: Request, res: Response) => {
  const { id } = req.params;
  characters = characters.filter(c => c.id !== parseInt(id));
  res.status(204).send();
};
