import { IconProps } from "../../utils/interfaces";

export default (props: IconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.5" fill="#313131" stroke="#758F8B" />
      <path
        className={props.pathClassName}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.872 10.3593L12.7573 13.8563C12.576 14.0479 12.2987 14.0479 12.128 13.8563C11.9573 13.6647 11.9573 13.3533 12.128 13.1497L14.9333 10L12.128 6.8503C11.9573 6.65867 11.9573 6.33535 12.128 6.14372C12.2987 5.95209 12.576 5.95209 12.7573 6.14372L15.872 9.6527C16.0427 9.84433 16.0427 10.1557 15.872 10.3593Z"
        fill="#758F8B"
      />
    </svg>
  );
};
