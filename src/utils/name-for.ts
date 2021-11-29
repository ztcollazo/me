import humanizeString from 'humanize-string';

const nameFor = (name: string): string => {
  if (name === 'ztcollazo') return 'Github profile design';
  if (name === 'me') return 'Portfolio site';
  if (name === 'destination-app') return 'Destination';
  return humanizeString(name);
};

export default nameFor;
