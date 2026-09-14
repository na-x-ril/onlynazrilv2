import Image, { ImageProps } from "next/image";

function CustomImage(props: ImageProps) {
  return (
    <Image
      alt={props.alt ?? "Logo"}
      src={props.src}
      width={props.width ?? 40}
      height={props.height ?? 40}
    ></Image>
  );
}

export function LinuxIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/cachyos/default.svg"
      alt="CachyOS"
    />
  );
}

export function TSIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/typescript/default.svg"
      alt="TypeScript"
    />
  );
}

export function TailwindIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/tailwind-css/default.svg"
      alt="Tailwind CSS"
    />
  );
}

export function NextIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/nextjs/default.svg"
      alt="Next.js"
    />
  );
}

export function DrizzleIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/drizzle-orm/default.svg"
      alt="Drizzle ORM"
    />
  );
}

export function BunIcon() {
  return (
    <CustomImage src="https://thesvg.org/icons/bun/default.svg" alt="Bun" />
  );
}

export function DartIcon() {
  return (
    <CustomImage src="https://thesvg.org/icons/dart/default.svg" alt="Dart" />
  );
}

export function KotlinIcon() {
  return (
    <CustomImage
      src="https://thesvg.org/icons/kotlin/default.svg"
      alt="Kotlin"
    />
  );
}

export function GitIcon() {
  return (
    <CustomImage src="https://thesvg.org/icons/git/default.svg" alt="Git" />
  );
}
