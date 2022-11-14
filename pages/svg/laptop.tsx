import * as React from "react"
import { SVGProps } from "react"

const Laptop = (props: SVGProps<SVGSVGElement>) => (
    <svg width={172} height={105} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M148.772 0c1.66 0 3.028 1.46 3.028 3.231v91.077c0 1.504-.963 2.77-2.274 3.127h18.359c1.89 0 3.44 1.59 3.539 3.582l.005.2c0 2.085-1.59 3.783-3.544 3.783H3.544c-1.89 0-3.441-1.59-3.54-3.582l-.004-.2c0-2.07 1.59-3.768 3.544-3.768h17.564c-1.298-.357-2.274-1.638-2.274-3.127V3.23C18.834 1.46 20.2 0 21.86 0h126.911ZM90.695 98.865h-9.961c-.935 0-1.702.804-1.702 1.816l.005.149c.072.93.809 1.668 1.697 1.668h9.96c.935 0 1.703-.819 1.703-1.817l-.006-.148c-.071-.93-.808-1.668-1.696-1.668Zm56.347-93.802H24.01V93.4h123.033V5.063Z"
            fill="#000"
            fillRule="nonzero"
        />
    </svg>
)

export default Laptop
