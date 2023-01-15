import { IconProps } from "../../utils/interfaces";

export default (props: IconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5695 0C9.55099 0 8.70975 0.84124 8.70975 1.85971V2.54657C8.16824 2.71513 7.64334 2.93219 7.14126 3.1957L6.65637 2.71081C5.93593 1.99037 4.74607 1.99037 4.02563 2.71081L2.71081 4.02563C1.99037 4.74607 1.99037 5.93593 2.71081 6.65637L3.1957 7.14126C2.93239 7.64354 2.71515 8.16824 2.54657 8.70975H1.85971C0.841239 8.70975 0 9.55099 0 10.5695V12.4305C0 13.449 0.841239 14.2902 1.85971 14.2902H2.54657C2.71513 14.8318 2.93237 15.3565 3.1957 15.8587L2.71081 16.3436C1.99037 17.0641 1.99037 18.2539 2.71081 18.9744L4.02563 20.2892C4.74607 21.0096 5.93593 21.0096 6.65637 20.2892L7.14126 19.8043C7.64354 20.0676 8.16843 20.2849 8.70975 20.4534V21.1403C8.70975 22.1588 9.55099 23 10.5695 23H12.4305C13.449 23 14.2902 22.1588 14.2902 21.1403V20.4534C14.8318 20.2849 15.3565 20.0676 15.8587 19.8043L16.3436 20.2892C17.0641 21.0096 18.2539 21.0096 18.9744 20.2892L20.2892 18.9744C21.0096 18.2539 21.0096 17.0641 20.2892 16.3436L19.8043 15.8587C20.0676 15.3565 20.2849 14.8318 20.4534 14.2902H21.1403C22.1588 14.2902 23 13.449 23 12.4305V10.5695C23 9.55099 22.1588 8.70975 21.1403 8.70975H20.4574C20.2885 8.16746 20.0706 7.6418 19.8066 7.13899L20.2892 6.65636C21.0096 5.93592 21.0096 4.74605 20.2892 4.02561L18.9744 2.7108C18.2539 1.99036 17.0641 1.99036 16.3436 2.7108L15.861 3.19342C15.3582 2.92937 14.8325 2.71155 14.2901 2.54261V1.85971C14.2901 0.84124 13.4488 0 12.4303 0H10.5695ZM10.5695 1.35294H12.4305C12.7238 1.35294 12.9373 1.56642 12.9373 1.85971V3.05335C12.9373 3.36365 13.1485 3.63415 13.4494 3.70962C14.2169 3.90158 14.9516 4.2062 15.6302 4.61314C15.8963 4.77264 16.237 4.73073 16.4565 4.51141L17.3004 3.66751C17.5075 3.46045 17.8108 3.46045 18.0179 3.66751L19.3327 4.98233C19.5398 5.18938 19.5398 5.49268 19.3327 5.69977L18.4888 6.54367V6.54348C18.2693 6.763 18.2274 7.10369 18.3871 7.36984C18.794 8.04819 19.0985 8.78318 19.2906 9.55063H19.2904C19.3659 9.85169 19.6364 10.0627 19.9467 10.0627H21.1403C21.4334 10.0627 21.6471 10.2762 21.6471 10.5695V12.4306C21.6471 12.7237 21.4336 12.9373 21.1403 12.9373H19.9425C19.632 12.9373 19.3616 13.1485 19.2863 13.4498C19.0945 14.2164 18.7908 14.9507 18.3846 15.6285C18.2253 15.8946 18.2674 16.2351 18.4867 16.4545L19.3327 17.3004C19.5398 17.5075 19.5398 17.8108 19.3327 18.0179L18.0179 19.3327C17.8108 19.5397 17.5075 19.5397 17.3004 19.3327L16.4545 18.4867C16.235 18.2674 15.8946 18.2253 15.6285 18.3846C14.9505 18.7906 14.2163 19.0945 13.4498 19.2862H13.4496C13.1485 19.3615 12.9373 19.6322 12.9373 19.9425V21.1403C12.9373 21.4334 12.7238 21.6471 12.4305 21.6471H10.5695C10.2763 21.6471 10.0627 21.4336 10.0627 21.1403V19.9425C10.0627 19.6322 9.85148 19.3616 9.55041 19.2862C8.78373 19.0945 8.04952 18.7908 7.37169 18.3846H7.3715C7.10537 18.2253 6.76505 18.2674 6.54553 18.4867L5.69956 19.3327C5.4925 19.5397 5.18921 19.5397 4.98211 19.3327L3.6673 18.0179C3.46024 17.8108 3.46024 17.5075 3.6673 17.3004L4.51327 16.4545C4.73279 16.2351 4.77469 15.8946 4.61538 15.6285C4.20939 14.9505 3.90552 14.2163 3.71394 13.4498C3.63863 13.1485 3.36796 12.9373 3.05767 12.9373H1.85988C1.56675 12.9373 1.3531 12.7239 1.3531 12.4306V10.5695C1.3531 10.2764 1.56658 10.0627 1.85988 10.0627H3.05767C3.36797 10.0627 3.63861 9.85151 3.71394 9.55044C3.90571 8.78376 4.20941 8.04969 4.61538 7.37172C4.77469 7.1054 4.73279 6.76507 4.51327 6.54575L3.6673 5.69978C3.46024 5.49272 3.46024 5.18943 3.6673 4.98233L4.98211 3.66751C5.18917 3.46046 5.49246 3.46046 5.69956 3.66751L6.54553 4.51349C6.76505 4.73281 7.10536 4.77491 7.3715 4.61541C8.04947 4.20942 8.78373 3.90555 9.55022 3.71377L9.55041 3.71396C9.85147 3.63865 10.0627 3.36799 10.0627 3.05769V1.8599C10.0627 1.56659 10.2762 1.35313 10.5695 1.35313V1.35294ZM11.5 5.7113C8.31112 5.7113 5.71134 8.31112 5.71134 11.5C5.71134 14.689 8.31097 17.2886 11.5 17.2886C14.689 17.2886 17.2887 14.689 17.2887 11.5C17.2887 8.31092 14.689 5.7113 11.5 5.7113ZM11.5 7.06424C13.9579 7.06424 15.9358 9.04214 15.9358 11.5C15.9358 13.9579 13.9579 15.9358 11.5 15.9358C9.04214 15.9358 7.06424 13.9579 7.06424 11.5C7.06424 9.04214 9.04214 7.06424 11.5 7.06424Z"
        fill="#646464"
      />
    </svg>
  );
};
