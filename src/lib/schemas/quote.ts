import { z } from "zod";

export const moveTypeValues = ["apartment", "home", "commercial"] as const;
export const moveSizeValues = [
  "studio",
  "1br",
  "2br",
  "3br",
  "4br_plus",
  "office",
] as const;

export type MoveType = (typeof moveTypeValues)[number];
export type MoveSize = (typeof moveSizeValues)[number];

export const moveTypeLabels: Record<MoveType, string> = {
  apartment: "Apartment",
  home: "Home",
  commercial: "Commercial / Office",
};

export const moveSizeLabels: Record<MoveSize, string> = {
  studio: "Studio",
  "1br": "1-bedroom",
  "2br": "2-bedroom",
  "3br": "3-bedroom",
  "4br_plus": "4-bedroom+",
  office: "Office space",
};

const phoneRegex = /^\d{10}$/;
const zipRegex = /^\d{5}$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const stripNonDigits = (s: string) => s.replace(/\D/g, "");

// Strict server-side schema. Used by the server action after the client form
// is submitted. Refuses any empty/missing values.
export const quoteSchema = z.object({
  moveType: z.enum(moveTypeValues),
  fromZip: z.string().regex(zipRegex, "5-digit ZIP required"),
  toZip: z.string().regex(zipRegex, "5-digit ZIP required"),
  areaDescription: z.string().max(200).optional().default(""),
  moveDate: z
    .string()
    .nullable()
    .refine(
      (v) => v === null || v === "" || dateRegex.test(v),
      "Invalid date",
    ),
  isFlexibleDate: z.boolean(),
  moveSize: z.enum(moveSizeValues),
  name: z.string().min(2, "Name is too short").max(100),
  phone: z
    .string()
    .transform(stripNonDigits)
    .pipe(z.string().regex(phoneRegex, "10-digit US phone required")),
  email: z.string().email("Valid email required"),
  notes: z.string().max(500).optional().default(""),
  source: z.string().default("/quote"),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

// Client-side resolver schema. Permissive on radios so empty defaults are
// allowed in the form state, but refines reject empty at validation time.
// React Hook Form needs the form values type and the resolver's input type to
// match, hence the split.
export const clientQuoteSchema = z.object({
  moveType: z
    .union([z.enum(moveTypeValues), z.literal("")])
    .refine((v) => v !== "", { message: "Choose an option" }),
  fromZip: z.string().regex(zipRegex, "5-digit ZIP required"),
  toZip: z.string().regex(zipRegex, "5-digit ZIP required"),
  areaDescription: z.string().max(200),
  moveDate: z.string(),
  isFlexibleDate: z.boolean(),
  moveSize: z
    .union([z.enum(moveSizeValues), z.literal("")])
    .refine((v) => v !== "", { message: "Choose a size" }),
  name: z.string().min(2, "Name is too short").max(100),
  phone: z
    .string()
    .refine(
      (v) => phoneRegex.test(stripNonDigits(v)),
      "10-digit US phone required",
    ),
  email: z.string().email("Valid email required"),
  notes: z.string().max(500),
  source: z.string(),
});

export type QuoteFormInput = z.input<typeof clientQuoteSchema>;
