import humanizeString from 'humanize-string';

export const nameFor = (name: string): string => {
  if (name === 'ztcollazo') return 'Github profile design';
  if (name === 'me') return 'Portfolio site';
  if (name === 'destination-app') return 'Destination';
  if (name === 'joke.svg') return 'Joke.SVG';
  if (name === 'FRC-2023-Charged-Up') return 'Charged Up Robot';
  return humanizeString(name);
};

export const ownerFor = (name: string): string => {
  if (name === 'destination-app') return 'ericcecchi';
  if (name === '404-Pathmaking-Tools' || name === 'FRC-2023-Charged-Up') return 'FRC-404-NOT-FOUND';
  return 'ztcollazo';
};
