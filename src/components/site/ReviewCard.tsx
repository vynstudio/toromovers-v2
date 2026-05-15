import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  city: string;
  rating?: number;
  body: string;
  date?: string;
}

export function ReviewCard({ name, city, rating = 5, body, date }: ReviewCardProps) {
  return (
    <article className="border-t border-rule pt-8 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-charcoal text-lg leading-relaxed mb-8 flex-1">
        &ldquo;{body}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-charcoal text-sm">{name}</p>
        <p className="text-xs text-graphite-light lowercase tracking-[0.15em] mt-1">
          {city}{date ? ` · ${date}` : ""}
        </p>
      </div>
    </article>
  );
}
