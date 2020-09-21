import * as React from 'react'

const Bannersuccess = (props: React.SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<g fill="none" fill-rule="evenodd">
			<rect width="24" height="24" fill="#00D27C" rx="12" />
			<path
				fill="#FFF"
				fill-rule="nonzero"
				stroke="#FFF"
				stroke-width=".2"
				d="M7.502 11.578c-.312-.356-.853-.392-1.21-.08-.356.312-.392.853-.08 1.21l3 3.428c.333.38.921.392 1.268.024l7.286-7.714c.325-.344.31-.887-.035-1.212-.344-.325-.886-.31-1.211.035L9.88 14.297l-2.379-2.719z"
			/>
		</g>
	</svg>
)

export default Bannersuccess
