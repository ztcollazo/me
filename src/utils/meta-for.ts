import humanizeString from 'humanize-string';

export const nameFor = (name: string): string => {
  if (name === 'ztcollazo') return 'Github profile design';
  if (name === 'me') return 'Portfolio site';
  if (name === 'destination-app') return 'Destination';
  if (name === 'mako-browser') return 'Mako';
  if (name === 'joke.svg') return 'Joke.SVG';
  return humanizeString(name);
};

export const ownerFor = (name: string): string => {
  if (name === 'destination-app') return 'ericcecchi';
  return 'ztcollazo';
};
