interface Favourite {
  className: string,
  pathClassName: string,
}

export default (props: Favourite) => {
  return (
    <svg className={props.className} viewBox="-2 0 60 49" xmlns="http://www.w3.org/2000/svg">
    <path className={props.pathClassName} d="M53.9904 15.5355C53.7267 6.9613 47.5056 0 39.508 0C34.174 0 29.5155 3.09102 27.0005 7.69182C24.4857 3.09102 19.8271 0 14.4921 0C6.49299 0 0.271949 6.96141 0.0096487 15.5355C-0.59043 34.9776 26.9996 49 26.9996 49C26.9996 49 54.5883 34.9776 53.9904 15.5355Z"/>
    </svg>
  )
}
