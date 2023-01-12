// interface for a code spell tip
export interface SpellTip {
  title: string;
  body: string;
  imagePaths?: Array<string>;
  id: string;
}

export interface IconProps {
  className: string;
  pathClassName: string;
}
