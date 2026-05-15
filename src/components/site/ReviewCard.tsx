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
    <article className="bg-off-white rounded-lg p-6 border border-rule shadow-card flex flex-col">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-graphite leading-relaxed mb-5 flex-1">&ldquo;{body}&rdquo;</p>
      <div className="border-t border-rule pt-4">
        <p className="font-semibold text-charcoal text-sm">{name}</p>
        <p className="text-xs text-graphite-light">
          {city}{date ? ` · ${date}` : ""}
        </p>
      </div>
    </article>
  );
}
