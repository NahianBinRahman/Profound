import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

// 01. Next.js Official Vector Mark
export function NextJsIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path
        d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z"
        fill="url(#nextjs-grad-1)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-grad-2)" />
      <defs>
        <linearGradient id="nextjs-grad-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextjs-grad-2" x1="121" y1="54" x2="120.8" y2="106.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 02. TypeScript Official Vector Badge
export function TypeScriptIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        fill="#ffffff"
        d="M64 45.4h-18v6.7h5.3v39.5h7.3V52.1H64v-6.7zm28.7 18.2c-2.4-1.5-5.3-2.3-8.8-2.3-3.6 0-6.4.8-8.3 2.5-1.9 1.7-2.9 4-2.9 6.8 0 2.7.9 4.9 2.7 6.4 1.8 1.6 4.9 3 9.4 4.3 4.5 1.3 7.8 2.9 9.8 4.7 2.1 1.8 3.1 4.3 3.1 7.4 0 4.1-1.6 7.4-4.8 9.9-3.2 2.5-7.7 3.8-13.5 3.8-4.2 0-8.1-.8-11.6-2.5v-7.8c3.5 2.2 7.5 3.4 11.9 3.4 3.7 0 6.6-.9 8.7-2.6 2.1-1.7 3.2-4.1 3.2-7.1 0-2.8-1-5.1-3-6.8-2-1.7-5.2-3.2-9.6-4.5-4.5-1.3-7.7-2.8-9.7-4.6-2-1.8-3-4.2-3-7.2 0-3.9 1.5-7 4.5-9.3 3-2.3 7.1-3.4 12.3-3.4 4 0 7.7.7 11.1 2.2v7.1z"
      />
    </svg>
  );
}

// 03. Amazon Web Services (AWS) Vector
export function AwsIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#FF9900"
        d="M18.78 17.06c-2.65 1.95-6.52 2.97-9.84 2.97-4.66 0-8.86-1.73-12.04-4.63-.25-.23-.03-.54.27-.37 3.44 1.99 7.7 3.19 12.08 3.19 2.94 0 6.18-.73 9.14-2.25.45-.23.82.35.39.72l-.01.37zM19.78 15.69c-.33-.43-2.23-.21-3.08-.1-.26.03-.3-.2-.06-.37 1.53-1.07 4.02-.76 4.31-.4.3.36-.08 2.87-1.51 4.07-.22.18-.43.08-.34-.16.3-.77.9-2.73.68-3.04z"
      />
      <path
        fill="#ffffff"
        d="M7.8 12.6c-.8-.7-1.4-1.7-1.4-3 0-2.4 1.9-4.1 4.7-4.1 2.1 0 3.7 1 4.3 2.6.1.2-.1.4-.3.4l-1.4.1c-.2 0-.3-.1-.4-.3-.4-.9-1.2-1.4-2.2-1.4-1.6 0-2.6 1-2.6 2.7 0 1.2.7 2.1 1.9 2.1.8 0 1.4-.4 1.8-1 .1-.1.2-.2.3-.2h1.5c.2 0 .4.2.3.4-.6 1.6-2.1 2.4-3.9 2.4-1.1-.1-2.1-.3-2.6-.7z"
      />
    </svg>
  );
}

// 04. OpenAI Vector Bloom
export function OpenAiIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#10A37F"
        d="M22.28 10.74a5.95 5.95 0 0 0-3.58-3.8 6.12 6.12 0 0 0-3.32-.15 6 6 0 0 0-3.03-2.18 5.94 5.94 0 0 0-6.53 1.29 5.96 5.96 0 0 0-1.5 2.76 6.13 6.13 0 0 0-.35 6.89 6.03 6.03 0 0 0 3.35 4.15 6.13 6.13 0 0 0 3.32.22 6.02 6.02 0 0 0 3.03 2.17 5.96 5.96 0 0 0 6.53-1.28 5.95 5.95 0 0 0 1.5-2.76 6.13 6.13 0 0 0 .35-6.89 5.98 5.98 0 0 0 .23-.42zm-8.2 9.53a4.5 4.5 0 0 1-2.92-1.07l.14-.08 4.85-2.8a.74.74 0 0 0 .38-.65v-6.83l2.05 1.18a.07.07 0 0 1 .04.05v5.82a4.54 4.54 0 0 1-4.54 4.38zm-8.87-4.14a4.48 4.48 0 0 1-.54-3.07l.14.09 4.84 2.8c.23.13.38.38.38.65v6.83l-2.05-1.18a.08.08 0 0 1-.04-.06v-5.83a4.52 4.52 0 0 1-2.73-.23zm-1.1-8.52a4.5 4.5 0 0 1 2.37-2l.01.17v5.6c0 .27.14.52.37.66l5.92 3.42-2.05 1.18a.08.08 0 0 1-.07 0l-5.04-2.91a4.53 4.53 0 0 1-1.51-6.12zm13.9 3.07l-5.92-3.42 2.05-1.18a.08.08 0 0 1 .07 0l5.04 2.91a4.53 4.53 0 0 1-.22 8.12v-5.77a.75.75 0 0 0-.37-.66h-.65zm2.84-2.4a4.5 4.5 0 0 1 .54 3.07l-.14-.09-4.84-2.8a.74.74 0 0 0-.38-.65V1.75l2.05 1.18a.08.08 0 0 1 .04.06v5.83a4.52 4.52 0 0 1 2.73.46zM8.3 10.3l2.92-1.68 2.92 1.69v3.38L11.22 15.38 8.3 13.69V10.3z"
      />
    </svg>
  );
}

// 05. Claude (Anthropic) Vector
export function ClaudeIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#D97757"
        d="M13.6 2.4c-.4-.5-1.1-.5-1.5 0L9.8 5.7c-.2.2-.4.4-.7.4L4.8 6.6c-.6.1-.9.7-.7 1.3l1.1 4.2c.1.3.1.5 0 .8L3.9 17c-.3.5-.1 1.2.4 1.4l4.2 1.5c.3.1.5.3.6.5l2.2 3.7c.3.5 1 .6 1.4.2l3.4-2.7c.2-.2.5-.3.8-.3l4.3.4c.6.1 1.1-.4 1.1-1l-.4-4.4c0-.3.1-.6.3-.8l3.1-3.1c.4-.4.4-1.1 0-1.5l-3.3-2.9c-.2-.2-.3-.5-.3-.8l.2-4.4c0-.6-.5-1.1-1.1-1.1l-4.4.3c-.3 0-.6-.1-.8-.3L13.6 2.4z"
      />
    </svg>
  );
}

// 06. Docker Vector
export function DockerIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#2496ED"
        d="M13.98 7.37H11.8V5.2h2.18v2.17zm-2.6 0H9.2V5.2h2.18v2.17zm-2.62 0H6.58V5.2h2.18v2.17zm7.84 0h-2.18V5.2h2.18v2.17zm-7.84 2.61H6.58V7.8h2.18v2.18zm2.62 0H9.2V7.8h2.18v2.18zm2.6 0H11.8V7.8h2.18v2.18zm2.62 0h-2.18V7.8h2.18v2.18zm2.6 0h-2.18V7.8h2.18v2.18zM23.9 12.3c-.3-.2-1.3-.8-2.7-.8-.4 0-.9.1-1.3.2-.3-1.6-1.5-2.2-1.6-2.2l-.4.3c-.1.1-.9 1.1-.8 2.6-.5.3-1.3.4-2.2.4H1.3c-.4 0-.8.3-.9.7-.5 2.4.2 5.1 2 6.7 1.6 1.4 3.7 2.1 6.8 2.1 6.5 0 11.2-3.6 13.1-9.3.4 0 .9-.2 1.4-.4.5-.3.6-.5.6-.5l-.4-.2z"
      />
    </svg>
  );
}

// 07. Kubernetes (K8s) Vector
export function KubernetesIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#326CE5"
        d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm0 3.2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
      />
    </svg>
  );
}

// 08. Shopify Plus Vector
export function ShopifyIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#95BF47"
        d="M19.8 7.4c-.1-.3-.3-.4-.5-.4h-2.6c-.1-1.4-.7-3.6-2.5-4.8C13.3 1.6 12.2 1.5 11.5 1.8c-.8.4-1.3 1.2-1.6 2.1-.8-.3-1.7-.3-2.4 0-.9.4-1.4 1.3-1.6 2.4l-3.3 1c-.3.1-.5.3-.5.6l2.1 14.3c.1.6.6 1.1 1.2 1.1h12.8c.6 0 1.1-.5 1.2-1.1L21 8c0-.2 0-.4-.2-.6h-1zm-6.2-4.5c1 .7 1.5 2.1 1.7 3.5h-4.3c.3-1.1.9-2.2 1.7-2.9.3-.3.6-.6.9-.6zm-2.8 12.6l-1.5-.8c-.8-.4-1.3-.9-1.3-1.6 0-1.1 1-1.8 2.4-1.8.8 0 1.5.2 2.1.6l-.5 1.5c-.5-.3-1-.5-1.5-.5-.6 0-.9.3-.9.6 0 .4.3.6.8.9l1.4.7c1.1.6 1.6 1.3 1.6 2.1 0 1.4-1.1 2.3-2.9 2.3-1 0-2-.3-2.7-.8l.6-1.6c.6.4 1.4.7 2.1.7.7 0 1.2-.3 1.2-.7 0-.4-.3-.6-.8-.9z"
      />
    </svg>
  );
}

// 09. Figma Official 5-Color Vector
export function FigmaIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path fill="#F24E1E" d="M8 12a4 4 0 0 1 4-4V4H8a4 4 0 0 0 0 8z" />
      <path fill="#FF7262" d="M12 4h4a4 4 0 0 1 0 8h-4V4z" />
      <path fill="#1ABCFE" d="M12 12h4a4 4 0 0 1 0 8h-4v-8z" />
      <path fill="#0ACF83" d="M8 20a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z" />
      <path fill="#A259FF" d="M8 16a4 4 0 1 0 4-4v4H8z" />
    </svg>
  );
}

// 10. Stripe Vector
export function StripeIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#635BFF"
        d="M13.98 10.1c0-.7-.57-1.02-1.52-1.02-.99 0-2.27.35-3.26.89l-.53-2.31c1.23-.55 2.76-.84 3.96-.84 3.1 0 4.96 1.55 4.96 4.12 0 3.82-5.26 3.2-5.26 4.85 0 .84.73 1.11 1.76 1.11 1.24 0 2.77-.47 3.8-.99l.52 2.34c-1.3.57-2.95.89-4.45.89-3.22 0-5.28-1.59-5.28-4.14 0-4.04 5.3-3.29 5.3-4.9z"
      />
    </svg>
  );
}

// 11. Cloudflare Vector
export function CloudflareIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#F38020"
        d="M19.5 10.5c-.3-2.8-2.6-5-5.5-5-2.2 0-4.1 1.3-4.9 3.2-.5-.1-1-.2-1.6-.2-2.5 0-4.5 2-4.5 4.5 0 .3 0 .7.1 1C1.3 14.5 0 16.1 0 18c0 2.2 1.8 4 4 4h15.5c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5-.2-1-.6-1.8-1.2-2.5h.6z"
      />
      <path
        fill="#FAAE40"
        d="M19.5 13.5c-.2 0-.4 0-.6.1.4.7.6 1.5.6 2.4 0 2.5-2 4.5-4.5 4.5H4c-.8 0-1.6-.2-2.3-.7 1 .8 2.2 1.2 3.5 1.2h14.3c2.2 0 4-1.8 4-4 0-2.1-1.6-3.8-3.7-4l-.3.5z"
      />
    </svg>
  );
}

// 12. PostgreSQL Vector
export function PostgresIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#336791"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 15.65c-.32.06-.65.09-.98.09-1.9 0-3.35-.95-3.85-2.55h-.1c-.75 1.6-2.1 2.55-3.8 2.55-.4 0-.79-.05-1.15-.14-.5-.13-.88-.52-.96-1.03-.1-.58.17-1.16.69-1.44.75-.41 1.76-.71 2.82-.96 1.48-.35 2.35-.85 2.65-1.5.17-.37.2-.8.2-1.33V9.7c0-.98-.63-1.6-1.65-1.6-.82 0-1.46.47-1.66 1.22-.09.34-.35.58-.69.58h-.81c-.44 0-.78-.38-.72-.81.28-1.79 1.85-3.09 3.88-3.09 2.19 0 3.88 1.49 3.88 3.7v3.91c0 .75.3 1.15.82 1.15.42 0 .8-.23 1.05-.62.24-.37.69-.53 1.08-.37.45.18.66.69.45 1.12-.47.95-1.28 1.54-2.19 1.76z"
      />
    </svg>
  );
}

// 13. Tailwind CSS Vector
export function TailwindIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#38BDF8"
        d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.75 6-2.25 1.43.29 2.45 1.33 3.58 2.48C15.91 14.07 18.06 16.25 24 16.25c4 0 6.5-2 7.5-6-1.5 2-3.5 2.75-6 2.25-1.43-.29-2.45-1.33-3.58-2.48C20.09 8.18 17.94 6 12 6zm-12 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.75 6-2.25 1.43.29 2.45 1.33 3.58 2.48C3.91 20.07 6.06 22.25 12 22.25c4 0 6.5-2 7.5-6-1.5 2-3.5 2.75-6 2.25-1.43-.29-2.45-1.33-3.58-2.48C8.09 14.18 5.94 12 0 12z"
        transform="scale(0.65) translate(4, 4)"
      />
    </svg>
  );
}

// 14. GraphQL Vector
export function GraphqlIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#E10098"
        d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L4.85 8.44v7.12L12 19.69l7.15-4.13V8.44L12 4.31zM12 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-5 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      />
    </svg>
  );
}

// 15. Three.js Vector
export function ThreeJsIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#ffffff"
        d="M20.5 4.5l-8.5-4-8.5 4v15l8.5 4 8.5-4v-15zm-8.5-2.6l6.8 3.2-6.8 3.2-6.8-3.2 6.8-3.2zm-7.3 4.8l6.8 3.2v7.8l-6.8-3.2v-7.8zm8.3 11v-7.8l6.8-3.2v7.8l-6.8 3.2z"
      />
    </svg>
  );
}

