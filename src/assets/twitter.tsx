import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg width={30} height={25} viewBox="0 0 30 25" ref={svgRef} {...props}>
      <image
        width={30}
        height={25}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAACFklEQVRIibWWPWiTQRjHf42xS8Qvirj50UGCSJVMKoKL0UkElY666FpscdLZIuJUJ3EQB1EQVBSCCopCgoMoVgkiuihFQkPFobaKNfLA/+Dlem+SM2/+cLzc3XP3u7v3uXuegVKpRAbaAEwAh4BNwCLwGrgB3PKmLwPvHXg3sAO4+h9r2A/cA9ak9N8GzgPbgXPAOmAkr85RYAxoAPcjoFuBZx1sRlVMLSBnJaeGLfrayk9EgK9H2DaBU8AF4Kzb8VpvshFgvMNEw8C+CPAgcA2YB4puxw3P6AxQB460mWhvBNS0Gqhpk18d+GHAsAjcBarASWDI629Ggpta7B+ruKM2t78IbAwM2KMyr0W8susgxzJnGegS/CtZyauskLu/0Dekgu5gOXKnqWBTBXgDvAO2JdqzVMMH25l/T3hxqw9Q04dkxTnXpURbt/8sVrUQ+CVwp09Ap0oIbDoOPO4T1DY2kwY2HdS7Ws34X1/2G3ywQQ/I4bICfwv9Rv/a1APxs1edDo33d2z3+HCG0ErKc7wMbHqgTOJjj9A54GhaZwhseqQXzALFFLAUCf2rkLkQC3ZaJXgnu6R+KpWqtzPKK1f6kWgrKhBYJrIrAmh6q+P93MnQwDstFVHoKyhTiJVdvUklc13JwM8VFu2IjkUCZ4GbwBXgU8xAd4+fqqzUA2Ipq53EZmC92n8rin0BphW7nyhBiBPwD3eDY0mVaXfLAAAAAElFTkSuQmCC"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const TwitterIcon = React.memo(ForwardRef)
export default TwitterIcon
