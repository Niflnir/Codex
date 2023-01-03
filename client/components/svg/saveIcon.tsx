interface Save {
  className: string;
  pathClassName: string;
}

export default (props: Save) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 367 367"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.pathClassName}
        d="M300 0H266.667V100C266.667 109.2 259.2 116.667 250 116.667H100C90.8 116.667 83.3333 109.2 83.3333 100V0H33.3333C14.9167 0 0 14.9167 0 33.3333V333.333C0 351.75 14.9167 366.667 33.3333 366.667H333.333C351.75 366.667 366.667 351.75 366.667 333.333V66.6667L300 0ZM300 333.333H66.6667V233.333C66.6667 214.917 81.5833 200 100 200H266.667C285.083 200 300 214.917 300 233.333V333.333Z"
      />
      <path
        className={props.pathClassName}
        d="M233.333 0H200V83.3333H233.333V0Z"
      />
    </svg>
  );
};
