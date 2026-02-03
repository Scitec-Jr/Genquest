import "server-only";
import type { Locale } from "./config";

const dictionaries = {
	pt: () => import("./dictionaries/pt.json").then((lang) => lang.default),
	en: () => import("./dictionaries/en.json").then((lang) => lang.default),
};

export async function getDictionary(locale: Locale) {
	return await dictionaries[locale]();
}
