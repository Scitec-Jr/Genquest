import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="py-8 px-4 md:px-8">
				<div className="max-w-360 mx-auto">
					<h1 className="mb-8 text-6xl text-(--accent-color) text-center">{dict.aboutUs.title}</h1>

                    <div className="lg:w-3/4 mx-auto p-8 bg-(--main-color) rounded-xl">
                        <h2 className="mb-4 text-2xl text-(--accent-color) text-center">{dict.aboutUs.heroTitle}</h2>

                        <p className="text-white">{dict.aboutUs.heroText}</p>
                    </div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8">
				<div className="max-w-360 mx-auto">
                    <h2 className="mb-4 text-4xl text-(--accent-color) text-center">{dict.aboutUs.methodologyTitle}</h2>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <div className="flex-1">
                            <Image src="/assets/images/methodology.png" alt="Metodologia" width={600} height={400} />
                        </div>

                        <p className="flex-2 lg:flex-3">{dict.aboutUs.methodologyText}</p>
                    </div>
                </div>
			</section>
		</main>
	);
}
