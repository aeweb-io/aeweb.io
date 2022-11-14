import * as React from "react"
import { SVGProps } from "react"

const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={60} height={105} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.37 0h37.251C54.896.014 59.981 5.104 60 11.39v82.22c-.019 6.286-5.104 11.376-11.379 11.39h-37.25C5.09 104.99.004 99.891 0 93.601v-82.21C.01 5.103 5.095.008 11.37 0Zm18.621 92.601a4.657 4.657 0 0 1 4.31 2.874 4.671 4.671 0 0 1-1.005 5.088 4.651 4.651 0 0 1-5.076 1.015 4.666 4.666 0 0 1 1.771-8.977Zm26.733-3.58V14.313H3.267V89.02h53.457Z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
)

export default Phone
