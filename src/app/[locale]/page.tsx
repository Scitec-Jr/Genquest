import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main className="min-h-[calc(100vh-66px)] max-w-360 mx-auto flex items-center justify-center">
			<h1 className="text-4xl font-bold">{dict.home.title}</h1>
		</main>
	);
}
