import { SVGProps } from 'react'

export function NextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="64"></circle>
      <path
        fill="url(#a)"
        d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
      ></path>
      <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
      <defs>
        <linearGradient
          id="a"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
