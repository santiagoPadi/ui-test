import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg width={36} height={36.969} viewBox="0 0 36 36.969" ref={svgRef} {...props}>
      <path
        data-name="Rectangle 9 copy"
        d="M8.428 16.413c4.239-6.245 5.743-8.025 5.492-11.64s.467-4.609 2.175-4.787 4.915.754 5.478 6.671c.243 2.56-1.584 7.6-1.584 7.6l12.784.007c1.81 0 3.228.775 3.228 3.245 0 2.314-2.557 3.01-2.557 3.01a2.777 2.777 0 011.636 2.586 2.853 2.853 0 01-2.824 2.864 2.4 2.4 0 011.458 2.7 3.152 3.152 0 01-2.6 2.662 2.445 2.445 0 01.9 2.791c-.574 1.356-2.089 2.851-5.492 2.851H10.625a2.238 2.238 0 01-2.287-1.228V17.169a2.647 2.647 0 01.09-.756zM1 15.219h6.219v21.75H1v-21.75zm-1 0h6.219v21.75H0v-21.75z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const CheckHandIcon = React.memo(ForwardRef)
export default CheckHandIcon
