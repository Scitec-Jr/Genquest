import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function getLocale(request: NextRequest): string {
	const acceptLanguage = request.headers.get("accept-language");
	if (!acceptLanguage) return defaultLocale;

	const preferred = acceptLanguage
		.split(",")
		.map((lang) => lang.split(";")[0].toLowerCase());

	for (const lang of preferred) {
		const baseLang = lang.split("-")[0];
		if (locales.includes(baseLang as "pt" | "en")) {
			return baseLang;
		}
	}

	return defaultLocale;
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	const hasLocale = locales.some(
		(locale) =>
			pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
	);

	if (hasLocale) {
		return NextResponse.next();
	}

	const locale = getLocale(request);

	const url = request.nextUrl.clone();
	url.pathname = `/${locale}${pathname}`;

	return NextResponse.redirect(url);
}