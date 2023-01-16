// interface for a code spell tip
export interface Spell {
  userId: string;
  id: string;
  title: string;
  tags: Array<string>;
  body: string;
  favouriteCount: number;
}

export interface IconProps {
  className: string;
  pathClassName: string;
}
