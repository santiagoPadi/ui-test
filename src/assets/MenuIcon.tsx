import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" width={18} height={18} ref={svgRef} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const MenuIcon = React.memo(ForwardRef)
export default MenuIcon
