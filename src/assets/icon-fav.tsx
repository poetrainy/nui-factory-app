function SvgComponent(props: any) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.86 10.617l7.058 6.935c.293.288.68.448 1.082.448s.79-.16 1.082-.448l7.059-6.935C19.328 9.453 20 7.82 20 6.115v-.238C20 3.003 18.027.553 15.336.08c-1.781-.312-3.594.3-4.867 1.64L10 2.214l-.469-.494C8.258.38 6.445-.232 4.664.08 1.973.553 0 3.003 0 5.877v.238c0 1.706.672 3.338 1.86 4.502z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default SvgComponent;
