import type { SVGProps } from "react";

function base(props: SVGProps<SVGSVGElement>) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3 21l1.44-4.32A8.5 8.5 0 1 1 8.1 19.6z" />
      <path d="M8.5 8.7c.15-.35.3-.35.5-.36.16 0 .35 0 .5.36.2.45.68 1.55.74 1.66.06.12.1.26.02.42-.08.16-.13.26-.25.4-.13.14-.27.32-.38.43-.13.13-.26.27-.12.53.15.27.65 1.08 1.4 1.75.96.87 1.77 1.14 2.03 1.27.27.13.42.11.58-.06.16-.18.66-.77.84-1.03.18-.27.35-.22.58-.13.24.09 1.5.71 1.75.84.27.13.44.2.5.3.07.13.07.72-.18 1.4-.24.7-1.42 1.33-1.96 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.96-.3-1.66-.6-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44z" />
    </svg>
  );
}
