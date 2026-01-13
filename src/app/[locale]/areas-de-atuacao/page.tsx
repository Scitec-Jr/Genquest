import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="w-full bg-(--main-color)">
				<div className="flex flex-col-reverse md:flex-row max-w-360 mx-auto">
					<div className="flex flex-col items-center justify-center flex-1 py-8">
						<Image src="/assets/global/logo2.png" alt="Logo" width={200} height={200} className="hidden md:block" />
						<h1 className="text-(--accent-color)">{dict.home.slogan}</h1>
					</div>

					<div className="flex flex-1">
						<div className="relative w-full">
							<Image src="/assets/images/client.png" alt="Cliente" width={300} height={450} className="w-full h-full" />
							<a href="" className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max p-4 bg-white border-2 rounded-full">
								{dict.home.clientButton}
							</a>
						</div>

						<div className="relative w-full">
							<Image src="/assets/images/partner.png" alt="Parceiro" width={300} height={450} className="w-full h-full" />
							<a href="" className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max p-4 bg-white border-2 rounded-full">
								{dict.home.partnerButton}
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
