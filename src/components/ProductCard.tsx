import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onInquiry: (title: string) => void;
  className?: string;
  preload?: boolean;
};

export function ProductCard({
  product,
  onInquiry,
  className,
  preload = false,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "surface-card-strong group overflow-hidden rounded-[2rem]",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          preload={preload}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="detail-pill">{product.tag}</span>
          <span className="detail-pill">{product.dimensions}</span>
        </div>

        <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#171310]">
          {product.title}
        </h3>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#7d705f]">
          {product.subtitle}
        </p>

        <div
          className="mt-6 flex items-center justify-between border-t pt-4"
          style={{ borderColor: "rgba(120,88,37,0.12)" }}
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[#b68931]">
              Ενδεικτική τιμή
            </p>
            <p className="mt-2 text-lg font-semibold text-[#8c1d18]">{product.price}</p>
          </div>

          <button
            type="button"
            onClick={() => onInquiry(product.title)}
            className="inline-flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#171310]"
          >
            Πληροφορίες
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
