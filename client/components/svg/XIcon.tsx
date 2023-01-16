import { IconProps } from "../../utils/interfaces";

export default (props: IconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 7 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className={props.pathClassName}
        x1="0.823223"
        y1="6.77293"
        x2="6.48008"
        y2="1.11608"
        stroke="#758F8B"
        strokeWidth="0.5"
      />
      <line
        className={props.pathClassName}
        x1="6.47996"
        y1="6.83351"
        x2="0.823107"
        y2="1.17666"
        stroke="#758F8B"
        strokeWidth="0.5"
      />
    </svg>
  );
};
