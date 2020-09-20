import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg width={24} height={26} viewBox="0 0 24 26" ref={svgRef} {...props}>
      <path
        data-name="Composite Path"
        d="M10.26 1.592c4.4 0 8.68 2.879 8.68 8.625s-4.28 8.625-8.68 8.625-8.68-2.879-8.68-8.625 4.28-8.625 8.68-8.625zm0-1.592C5.19 0 0 3.4 0 10.217s5.19 10.216 10.26 10.216a10.983 10.983 0 005.49-1.443L22.42 26 24 24.409l-6.44-6.768a9.928 9.928 0 002.96-7.424C20.52 3.4 15.33 0 10.26 0z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const SearchIcon = React.memo(ForwardRef)
export default SearchIcon
