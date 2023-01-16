import { IconProps } from "../../utils/interfaces";

export default (props: IconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9999 5.03461C15.0005 4.79906 14.9712 4.56773 14.8901 4.34419C14.6538 3.69221 14.2566 3.15154 13.5909 2.80017C12.0442 1.98383 10.4961 1.16993 8.95289 0.348705C8.53332 0.125152 8.08645 0.0127596 7.60614 0.00116694C7.07657 -0.0113817 6.57351 0.0760479 6.10784 0.323065C4.55026 1.1488 2.98296 1.96053 1.43241 2.79743C0.507874 3.29665 0.0214486 4.06389 0.00979061 5.04417C-0.00902235 6.68313 0.00531111 8.3222 0.00396758 9.96127C0.00381824 10.2137 0.0378608 10.4605 0.129385 10.6985C0.373354 11.3321 0.767517 11.8574 1.41972 12.2006C2.95444 13.0082 4.48963 13.8154 6.01908 14.6308C6.42088 14.8451 6.84432 14.9718 7.30597 14.9947C7.87007 15.0231 8.40638 14.9394 8.90297 14.6759C10.4502 13.8556 11.9978 13.0358 13.5505 12.2236C13.9835 11.9968 14.3178 11.6882 14.5719 11.3019C14.8172 10.9296 14.99 10.5316 14.9942 10.0917C15.0021 9.22818 14.9966 8.36463 14.9966 7.50122H14.9991C14.9993 6.67902 14.9982 5.85681 15 5.03475L14.9999 5.03461ZM10.8512 7.79324H7.82112V10.5613C7.82112 10.7232 7.67733 10.8545 7.5001 10.8545C7.32287 10.8545 7.17909 10.7232 7.17909 10.5613V7.79324H4.14904C3.97181 7.79324 3.82803 7.66189 3.82803 7.49999C3.82803 7.33809 3.97181 7.20674 4.14904 7.20674H7.17909V4.43872C7.17909 4.27681 7.32287 4.14546 7.5001 4.14546C7.67733 4.14546 7.82112 4.27681 7.82112 4.43872V7.20674H10.8512C11.0284 7.20674 11.1722 7.33809 11.1722 7.49999C11.1723 7.66189 11.0284 7.79324 10.8512 7.79324Z"
        fill="#758F8B"
      />
    </svg>
  );
};
