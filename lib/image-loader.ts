type LoaderArgs = { src: string };

export default function imageLoader({ src }: LoaderArgs): string {
  if (/^https?:\/\//.test(src)) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}
