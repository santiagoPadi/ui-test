import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg width={16} height={12} viewBox="0 0 16 12" ref={svgRef} {...props}>
      <image
        width={16}
        height={12}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABI0lEQVQokYWSvyvFYRTGP1d+LnZluZuSGJUyGA13U6IUhjtIyuYfMDDerBbXRBm5u0lkQ4oUWe5gkzvo0dHzvfd0U946vef5fM95ztv7fkuSzoBx4BM4ARpADRgCvoEL4AHYBkaADeDDNU0kTamz1iUFm0tszexe0pGkPutm1GNx6uKGdWaHksYk3aRvFUnXkRdgJk0sm01bx6R3SSvJ4FzSQTaIuHNDLbEXs8fEhiXdShoN3UNn7TlbhTbf9x665LwKvAJvvyo5D0hqeeKiWb7gqlnc03LRl0/QAurON71XzGMtAGWgFzhud6UTREykiTuSdiVNWn/5TrZyT7dBxGUymTW7SmzwP4N5F8a0gi2Z1bvr/zKIeO56935JT/6BOnUSP5oQ+B9+XnnFAAAAAElFTkSuQmCC"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const WikiIcon = React.memo(ForwardRef)
export default WikiIcon
