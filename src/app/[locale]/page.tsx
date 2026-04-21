import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="bg-(--dark-color) h-120">
				<div className="relative max-w-360 h-full mx-auto">
					<Image src="/assets/images/heroHome.png" alt="Genquest" width={1400} height={400} className="w-full max-w-180 h-full ms-auto" />
					<div className="absolute top-1/2 left-8 lg:left-16 transform -translate-y-1/2 text-white">
						<h1 className="mb-6 text-3xl md:text-4xl secondary-font w-84 md:w-100">{dict.home.slogan}</h1>

						<a href="#footer" className="px-4 py-1 bg-(--accent-color) rounded-full">
							{dict.home.contactButton}
						</a>
					</div>
				</div>
			</section>

			<section className="relative z-10 pb-16">
                <div className="shadow-[4px_4px_15px_20px_white]">
                    <Image src="/assets/icons/arrowDown.png" alt={dict.home.arrowDownAlt} width={44} height={44} className="mb-4 mx-auto" />
                </div>

				<div className="max-w-360 mx-auto">
					<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-4 md:px-8 lg:px-16">
						<div className="flex-2">
                            <h2 className="mb-2 text-(--main-color) secondary-font font-medium text-3xl">{dict.home.whyTitle}</h2>

                            <p className="mb-4 text-2xl font-medium">{dict.home.whyText}</p>
                        </div>

                        <div className="flex-1 px-4 py-6 bg-(--accent-color) rounded-3xl border">
                            <h2 className="mb-2 text-2xl secondary-font text-center">{dict.home.visionTitle}</h2>

                            <p className="text-lg">{dict.home.visionText}</p>
                        </div>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16 bg-(--accent-color)">
				<div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center max-w-360 mx-auto">
                    <div className="flex-1 px-4 py-6 bg-white rounded-3xl border">
						<h2 className="mb-2 text-2xl secondary-font text-center">{dict.home.missionTitle}</h2>

						<p className="text-lg">{dict.home.missionText}</p>
					</div>

					<div className="flex-2 text-right">
						<h2 className="mb-2 text-white secondary-font font-medium text-3xl">{dict.home.whatTitle}</h2>

						<p className="text-2xl font-medium">{dict.home.whatText}</p>
					</div>
				</div>
			</section>

            <section className="py-8 px-4 md:px-8 lg:px-16 bg-(--main-color)">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center max-w-360 mx-auto">
                    <div className="flex-2 w-full">
						<h2 className="mb-2 text-(--accent-color) secondary-font font-medium text-3xl text-left">{dict.home.howTitle}</h2>

						<p className="text-white text-2xl font-medium">{dict.home.howText}</p>
					</div>

                    <div className="flex-1 w-full px-4 py-6 bg-white rounded-3xl border">
						<h2 className="mb-2 text-2xl text-(--main-color) secondary-font text-center">{dict.home.valuesTitle}</h2>

						<ul className="list-disc ps-6">
                            <li>{dict.home.valuesItem1}</li>
                            <li>{dict.home.valuesItem2}</li>
                            <li>{dict.home.valuesItem3}</li>
                        </ul>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16">
				<div className="max-w-360 mx-auto">
                    <h2 className="mb-16 text-3xl secondary-font font-medium text-(--accent-color) text-center uppercase">{dict.home.leadershipTitle}</h2>

                    <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-center mb-4">
                        <div className="relative w-50 h-53 pt-12 p-4 bg-(--main-color) rounded-xl text-white text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/gustavo.png" alt={dict.home.gustavoName} width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--accent-color) secondary-font font-medium">{dict.home.gustavoName}</h3>

                            <p>{dict.home.gustavoBio}</p>
                        </div>

                        <div className="relative w-50 h-53 pt-12 p-4 rounded-xl text-(--main-color) text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/milton.png" alt={dict.home.miltonName} width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--accent-color) secondary-font font-medium">{dict.home.miltonName}</h3>

                            <p>{dict.home.miltonBio}</p>
                        </div>

                        <div className="relative w-50 h-53 pt-12 p-4 bg-(--accent-color) rounded-xl text-black text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/eli.png" alt={dict.home.eliName} width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--main-color) secondary-font font-medium">{dict.home.eliName}</h3>

                            <p>{dict.home.eliBio}</p>
                        </div>
                    </div>

                    <h3>{dict.home.competenciesTitle}</h3>
                    <p>{dict.home.competenciesText}</p>
                </div>
			</section>
		</main>
	);
}
