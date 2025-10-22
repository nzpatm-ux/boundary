
export type Point = { x: number; y: number };

export type Shape = {
  type: 'rectangle' | 'polygon';
  points: Point[];
  closed: boolean;
};

export type Tool = 'rectangle' | 'pen';

export type StrokeSettings = {
  color: string;
  width: number;
};

export type Effects = {
  blur: number; // in px
  desaturate: number; // 0 to 1
  darken: number; // 0 to 1
};

export type Disclaimer = {
  text: string;
  position: 'bottom-left' | 'bottom-center' | 'bottom-right';
  color: 'black' | 'white';
  scale: number; // multiplier
};

export type EditedImage = {
  file: File;
  previewUrl: string;
  shape: Shape | null;
  stroke: StrokeSettings;
  effects: Effects;
  disclaimer: Disclaimer;
};
