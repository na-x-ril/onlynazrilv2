import Image from "next/image";
import type { ReactNode } from "react";

function IconShell({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11"
      aria-hidden="true"
      fill="none"
    >
      {children}
    </svg>
  );
}

export function LinuxIcon() {
  return (
    <IconShell>
      <rect x="6" y="10" width="36" height="28" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <rect x="6" y="10" width="36" height="7" fill="#adff2f" stroke="#0a0a0a" strokeWidth="3" />
      <text x="13" y="32" fill="#0a0a0a" fontSize="13" fontWeight="700" fontFamily="inherit">
        &gt;_
      </text>
    </IconShell>
  );
}

export function TSIcon() {
  return (
    <IconShell>
      <rect x="7" y="7" width="34" height="34" fill="#3d8bff" stroke="#0a0a0a" strokeWidth="3" />
      <text x="13" y="31" fill="#0a0a0a" fontSize="15" fontWeight="700" fontFamily="inherit">
        TS
      </text>
    </IconShell>
  );
}

export function TailwindIcon() {
  return (
    <IconShell>
      <path
        d="M6 18c2-6 5-9 10-9 6 0 7 6 10 6 3 0 4-3 6-3 2 0 3 3 2 6-2 6-5 9-10 9-6 0-7-6-10-6-3 0-4 3-6 3-2 0-3-3-2-6z"
        fill="#adff2f"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
    </IconShell>
  );
}

export function NextIcon() {
  return (
    <IconShell>
      <rect x="6" y="6" width="36" height="36" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
      <text x="13" y="32" fill="#f4f2ed" fontSize="17" fontWeight="700" fontFamily="inherit">
        N
      </text>
      <circle cx="33" cy="15" r="3" fill="#adff2f" />
    </IconShell>
  );
}

export function DrizzleIcon() {
  return (
    <IconShell>
      <ellipse cx="24" cy="14" rx="16" ry="6" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M8 14v18c0 3 7 6 16 6s16-3 16-6V14" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M8 22c0 3 7 6 16 6s16-3 16-6" fill="none" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M8 29c0 3 7 6 16 6s16-3 16-6" fill="none" stroke="#3d8bff" strokeWidth="3" />
    </IconShell>
  );
}

export function BunIcon() {
  return (
    <IconShell>
      <path
        d="M24 6c4 6 8 8 8 14a8 8 0 1 1-16 0c0-6 4-8 8-14z"
        fill="#f4f2ed"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <circle cx="20" cy="24" r="2" fill="#0a0a0a" />
      <circle cx="28" cy="24" r="2" fill="#0a0a0a" />
    </IconShell>
  );
}

export function DartIcon() {
  return (
    <Image alt="Logo" src="https://dart.dev/assets/img/logo/dart-192.svg" height={100} width={100}></Image>
  );
}

export function KotlinIcon() {
  return (
    <IconShell>
      <rect x="6" y="6" width="36" height="36" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M10 38L24 24l14 14H10z" fill="#adff2f" stroke="#0a0a0a" strokeWidth="3" strokeLinejoin="miter" />
      <text x="11" y="20" fill="#0a0a0a" fontSize="11" fontWeight="700" fontFamily="inherit">
        K
      </text>
    </IconShell>
  );
}

export function GitIcon() {
  return (
    <IconShell>
      <circle cx="12" cy="11" r="5" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <circle cx="36" cy="37" r="5" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M14 16c0 10 12 4 12 16v10" fill="none" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M26 32h10" stroke="#0a0a0a" strokeWidth="3" />
      <circle cx="26" cy="16" r="3" fill="#adff2f" stroke="#0a0a0a" strokeWidth="2" />
    </IconShell>
  );
}
