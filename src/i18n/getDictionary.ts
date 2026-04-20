import "server-only";
import type { Locale } from "./config";

// usa o JSON como fonte de tipo
type Dictionary = typeof import("./dictionaries/en.json");

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("./dictionaries/pt.json").then((lang) => lang.default),
  en: () => import("./dictionaries/en.json").then((lang) => lang.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}