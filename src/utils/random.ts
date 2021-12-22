import colors from 'tailwindcss/colors';

export const random = (min: number, max: number, div: number = 1) => {
  const num = Math.floor((Math.random() * max) / div) * div;
  if (num >= min) {
    return num;
  }
  return min;
};

const cols = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'teal', 'cyan', 'sky', 'violet', 'indigo', 'fuchsia', 'rose'];

export const randomColor = (dark: boolean): string => colors[
  cols[random(0, cols.length)]
][
  random(300, dark ? 800 : 600, 100)
];
