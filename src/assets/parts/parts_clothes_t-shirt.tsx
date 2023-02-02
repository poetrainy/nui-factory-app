import { SVGProps } from 'react';

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 317 214.17"
      {...props}
    >
      <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
        <path
          d="M316.94 50.8c-.15-.66-.55-1.23-1.13-1.58l-57.75-35.9C243.61 4.34 227.02-.24 209.98 0l-6.92.11c-1.15.02-2.14.82-2.39 1.94-5.45 23.88-25.8 36.85-42.16 36.92-16.39-.07-36.74-13.04-42.18-36.92a2.509 2.509 0 00-2.4-1.94L107.01 0C90.04-.24 73.38 4.33 58.94 13.31L1.18 49.22c-.57.35-.98.92-1.12 1.58-.15.65-.02 1.34.34 1.9l47.26 72.54a2.502 2.502 0 003.41.76l12.05-7.46-12.81 92.79c-.1.72.12 1.44.59 1.99.48.54 1.16.85 1.89.85h211.42a2.49 2.49 0 002.47-2.84l-12.8-92.79 12.04 7.46c1.15.71 2.67.38 3.41-.76l47.26-72.54a2.5 2.5 0 00.35-1.9zm-64.95 60.69c-.83-.51-1.87-.5-2.68.03s-1.25 1.48-1.11 2.44l13.14 95.21H55.65l13.15-95.21c.13-.96-.31-1.91-1.12-2.44s-1.85-.54-2.68-.03l-14.48 8.97L5.99 52.11l55.58-34.54C75.2 9.1 90.86 4.77 106.93 5.01l4.99.08c5.93 22.21 25.63 38.8 46.59 38.89 20.93-.09 40.63-16.68 46.56-38.89l4.99-.08a83.271 83.271 0 0145.36 12.56l55.59 34.54-44.53 68.35-14.49-8.97z"
          fill="#212121"
        />
        <path
          d="M248.2 113.96l13.14 95.21H55.65l13.15-95.21c.13-.96-.31-1.91-1.12-2.44s-1.85-.54-2.68-.03l-14.48 8.97L5.99 52.11l55.58-34.54C75.2 9.1 90.86 4.77 106.93 5.01l4.99.08c5.93 22.21 25.63 38.8 46.59 38.89 20.93-.09 40.63-16.68 46.56-38.89l4.99-.08a83.271 83.271 0 0145.36 12.56l55.59 34.54-44.53 68.35-14.49-8.97c-.83-.51-1.87-.5-2.68.03s-1.25 1.48-1.11 2.44z"
          fill="#eeeeee"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
