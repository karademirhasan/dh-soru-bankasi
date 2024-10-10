export enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum Colors {
  Black = 'black',
  Red = 'red',
  White = 'white',
}

export enum Backgrounds {
  Transparent = 'transparent',
  Gray = 'gray',
  LightGray = 'light-gray',
  Yellow = 'yellow',
  Green = 'green',
}
export enum IconDirection {
  Start = 'start',
  End = 'end',
}

export enum OptionStatus {
  Wrong = 'wrong',
  Correct = 'correct',
}

export interface Option {
  data: {
    key: string;
    text: string;
  };
}
