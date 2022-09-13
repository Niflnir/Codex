interface Photo {
  className: string,
  pathClassName: string,
}

export default (props: Photo) => {
  return (
    <svg className={props.className} viewBox="0 0 41 38" xmlns="http://www.w3.org/2000/svg"> 
      <path className={props.pathClassName} d="M30.2291 0.000221918H10.7712C7.9157 0.00349807 5.17778 1.16684 3.15821 3.23466C1.13923 5.30219 0.00320154 8.106 0 11.0299V26.9703C0.00319923 29.8944 1.13923 32.6982 3.15821 34.7656C5.17749 36.8334 7.91547 37.9967 10.7712 38H30.2291C32.6396 37.9958 34.9791 37.1646 36.8739 35.6388C38.7686 34.113 40.1094 31.9808 40.6818 29.583V29.5732C40.8892 28.7214 40.9959 27.8475 41 26.9701V11.0297C40.9968 8.10555 39.8608 5.30181 37.8418 3.23444C35.8225 1.16662 33.0845 0.00327851 30.2288 0L30.2291 0.000221918ZM30.2291 35.8656H10.7712C8.4683 35.8629 6.26028 34.9251 4.63188 33.2575C3.00349 31.59 2.08763 29.3289 2.08502 26.9706V24.8897L10.4932 16.2779C11.2127 15.5437 12.1873 15.1315 13.2032 15.1315C14.219 15.1315 15.1936 15.5437 15.9131 16.2779L26.3509 26.9712C26.7409 27.3509 27.2589 27.5627 27.797 27.5627C28.3353 27.5627 28.853 27.3509 29.2433 26.9712C30.1502 26.0437 31.3793 25.5228 32.6606 25.5228C33.9424 25.5228 35.1715 26.0437 36.0782 26.9712L38.5521 29.503C38.0182 31.3394 36.9196 32.9507 35.4201 34.097C33.9206 35.2434 32.0999 35.8638 30.2286 35.8661L30.2291 35.8656ZM38.9157 26.8528L37.5537 25.458H37.5534C36.2665 24.1309 34.5156 23.3849 32.6892 23.3849C30.8627 23.3849 29.1118 24.1309 27.8249 25.458L17.3856 14.7693C16.2752 13.6349 14.7707 12.9978 13.2022 12.9978C11.6337 12.9978 10.1292 13.6349 9.01875 14.7693L2.08347 21.8713L2.08376 11.0301C2.08637 8.67158 3.00252 6.41047 4.63121 4.74293C6.2599 3.07508 8.46822 2.1372 10.7714 2.13514H30.2293C32.5322 2.13782 34.7402 3.07569 36.3686 4.74324C37.997 6.41078 38.9129 8.67188 38.9155 11.0301L38.9157 26.8528Z" fill="black"/>
      <path className={props.pathClassName} d="M28.7847 7.14196C27.6318 7.14167 26.526 7.61015 25.7105 8.44437C24.895 9.27856 24.4367 10.4106 24.4358 11.591C24.4352 12.7715 24.8921 13.9039 25.7067 14.7393C26.5211 15.5748 27.6262 16.0447 28.7792 16.0456C29.9317 16.0468 31.0378 15.5792 31.8539 14.7453C32.6697 13.9116 33.1289 12.7799 33.1307 11.5996C33.1309 10.4184 32.6735 9.28542 31.8585 8.44979C31.0436 7.61376 29.9378 7.14349 28.7847 7.14204V7.14196ZM28.7847 13.9096C28.1841 13.9099 27.6079 13.6657 27.1833 13.2308C26.7587 12.796 26.5202 12.206 26.5205 11.591C26.5208 10.9759 26.7601 10.3865 27.1853 9.95201C27.6106 9.51777 28.1867 9.27445 28.7873 9.27534C29.3879 9.27653 29.9635 9.52224 30.3869 9.95826C30.8106 10.394 31.0477 10.9846 31.0459 11.5996C31.0436 12.2125 30.8045 12.7995 30.3808 13.2323C29.957 13.6653 29.3832 13.9086 28.7846 13.9095L28.7847 13.9096Z" fill="black"/>
    </svg>
  )
}
