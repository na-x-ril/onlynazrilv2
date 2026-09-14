import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/self-portrait.png"
      alt="Self-portrait of Onlynazril"
      width={1070}
      height={1070}
      priority
      className="h-auto w-full"
    />
  );
}