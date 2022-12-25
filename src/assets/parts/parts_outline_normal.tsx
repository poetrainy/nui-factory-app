import { SVGProps } from 'react';

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 229.67 227.84"
      {...props}
    >
      <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
        <path
          d="M198.25 33.94C177.72 11.74 148.87 0 114.84 0S51.95 11.74 31.42 33.94C10.86 56.16 0 87.45 0 124.43c0 77.37 78.86 103.41 114.84 103.41s114.83-26.04 114.83-103.41c0-36.98-10.86-68.27-31.42-90.49zm-83.41 188.9c-16.59 0-44.51-5.82-68.61-22.2C27.42 187.86 5 164.26 5 124.43 5 51.88 48.11 5 114.84 5s109.83 46.88 109.83 119.43-75.43 98.41-109.83 98.41z"
          fill="#212121"
        />
        <path
          className="colorChange"
          d="M224.67 124.43c0 73.63-75.43 98.41-109.83 98.41-16.59 0-44.51-5.82-68.61-22.2C27.42 187.86 5 164.26 5 124.43 5 51.88 48.11 5 114.84 5s109.83 46.88 109.83 119.43z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
