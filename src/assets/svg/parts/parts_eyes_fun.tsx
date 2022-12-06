import { SVGProps } from 'react';

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52.71 13.86"
      {...props}
    >
      <path
        d="M3.5 13.86c-.82 0-1.65-.29-2.32-.88C-.27 11.71-.4 9.48.87 8.02 1.16 7.7 8.11 0 25.53 0s25.66 7.41 26.01 7.73c1.44 1.29 1.57 3.5.28 4.94s-3.5 1.57-4.94.28C46.83 12.91 39.84 7 25.54 7S6.16 12.62 6.11 12.68a3.43 3.43 0 01-2.61 1.18z"
        fill="#212121"
        data-name="\u30EC\u30A4\u30E4\u30FC 1"
      />
    </svg>
  );
}

export default SvgComponent;
