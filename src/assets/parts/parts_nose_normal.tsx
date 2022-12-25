import { SVGProps } from 'react';

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 3.96"
      {...props}
    >
      <path
        d="M.5 3.96c-.28 0-.5-.22-.5-.5V.5C0 .22.22 0 .5 0s.5.22.5.5v2.96c0 .28-.22.5-.5.5z"
        fill="#212121"
        data-name="\u30EC\u30A4\u30E4\u30FC 1"
      />
    </svg>
  );
}

export default SvgComponent;
