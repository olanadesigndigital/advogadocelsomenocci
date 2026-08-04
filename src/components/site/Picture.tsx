import { imageSources } from "@/lib/images";

type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  sizes?: string;
};

/**
 * <img> com AVIF/WebP responsivos gerados em build.
 * Mantém o conteúdo original da foto — apenas formato e resolução mudam.
 */
export function Picture({ src, alt, sizes = "100vw", ...props }: PictureProps) {
  const { avif, webp, fallback } = imageSources(src);
  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img src={src} srcSet={fallback} sizes={sizes} alt={alt} decoding="async" {...props} />
    </picture>
  );
}
