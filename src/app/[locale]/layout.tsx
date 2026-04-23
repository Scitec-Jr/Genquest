import { getDictionary } from "@/i18n/getDictionary";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  const locale = isValidLocale(rawLocale)
    ? rawLocale
    : defaultLocale;

  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict.header} />
      {children}
      <Footer dict={dict.footer} />
      <CookieConsent locale={locale} dict={dict.cookieConsent} />
    </>
  );
}