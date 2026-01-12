import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<>
            <Header locale={locale} dict={dict.header} />
			{children}
			<Footer dict={dict.footer} />
		</>
	);
}
