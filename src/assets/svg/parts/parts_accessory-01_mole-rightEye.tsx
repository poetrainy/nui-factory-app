import { SVGProps } from "react";

function SvgComponent(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4.33 4.33"
      {...props}
    >
      <circle
        cx={2.16}
        cy={2.16}
        r={2.16}
        fill="#212121"
        data-name="\u30EC\u30A4\u30E4\u30FC 1"
      />
    </svg>
  );
}

export default SvgComponent;
