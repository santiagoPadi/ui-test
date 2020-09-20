import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" ref={svgRef} {...props}>
      <image
        width={25}
        height={25}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABRUlEQVRIie2WPUsDQRCGn3wZP4gWidpYplEshEP8H1qmCoL+AmtrK7HQKqRLZ6G/QOxstbUSbCxEMBqbS5SBFfYGsu7t3XW+3TszO+/ezM5wpSiKToADoEL+mAADEfkuIHkCZWBUsMaoCowzJvkEHoEvoAbMAW2gbvzjakaBY+AceFX2O2Dnl2QR2Qf6U3yJ6pQDBe4dAoLYJqFfcqX4GnAENM2z3chD5FnxM2B3WnBouTSWXc5QkZbiK65g33LJVugBH2b93Cr/qemDvKoZ4NDOLWvlHWj8IRKbQfNFbO3CoW+5SsCqZ+y2XrZpevLiGbekDb49kctcmmVaMf25sfwyI1umJ5uhIlKuPYs/KJEusO66YQje1JknV468htGJf5HUIkX8pSQ0RGQ+4OCs4ouO2AWZkwugk7J0Q8VlG2ibYAJc/wBnQjHWKJkvywAAAABJRU5ErkJggg=="
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgComponent)
const FacebookIcon = React.memo(ForwardRef)
export default FacebookIcon
