import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="relative py-8 px-4 md:px-8 lg:px-16 bg-white z-20">
				<div className="max-w-360 mx-auto">
					<h1 className="mb-8 text-6xl secondary-font text-(--accent-color) text-center">{dict.aboutUs.title}</h1>

					<div className="lg:w-3/4 mx-auto p-8 bg-(--main-color) rounded-xl">
						<h2 className="mb-4 text-2xl secondary-font text-(--accent-color) text-center">{dict.aboutUs.heroTitle}</h2>

						<div className="text-white">
							{dict.aboutUs.heroText.split("\n").map((text, index) => (
								<p key={index} className="indent-4">
									{text}
									<br />
									<br />
								</p>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-8 px-4 md:px-8 lg:px-16 bg-(--main-color) z-20">
				<div className="flex flex-col md:flex-row">
					<div className="flex items-center gap-4 flex-1 w-full p-4">
                        <h2 className="flex-1 mb-4 text-4xl secondary-font text-(--accent-color)">{dict.aboutUsPage.excellenceTitle}</h2>

                        <div className="flex-1 w-full overflow-hidden">
                            <Carousel showDots={false}>
                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint1}</span>
                                            <b>{dict.aboutUsPage.excellenceBold1}</b> {dict.aboutUsPage.excellenceText1}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint2}</span>
                                            <b>{dict.aboutUsPage.excellenceBold2}</b> {dict.aboutUsPage.excellenceText2}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint3}</span>
                                            <b>{dict.aboutUsPage.excellenceBold3}</b> {dict.aboutUsPage.excellenceText3}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint4}</span>
                                            <b>{dict.aboutUsPage.excellenceBold4}</b> {dict.aboutUsPage.excellenceText4}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint5}</span>
                                            <b>{dict.aboutUsPage.excellenceBold5}</b> {dict.aboutUsPage.excellenceText5}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint6}</span>
                                            <b>{dict.aboutUsPage.excellenceBold6}</b> {dict.aboutUsPage.excellenceText6}
                                        </p>
                                    </div>
                                </div>

                                <div className="min-w-full px-4">
                                    <div className="p-8 bg-white rounded-4xl text-black">
                                        <p>
                                            <span className="text-xl text-(--accent-color) font-medium">{dict.aboutUsPage.excellencePoint7}</span>
                                            <b>{dict.aboutUsPage.excellenceBold7}</b> {dict.aboutUsPage.excellenceText7}
                                        </p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
				</div>
			</section>

			<section className="bg-(--accent-color)">
				<div className="flex flex-col md:flex-row">
					<div className="flex-1">
						<Image src="/assets/images/heroAbout.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-100" />
					</div>

					<div className="relative flex flex-col justify-center flex-1 p-4 md:pe-8 lg:pe-16 shadow-[4px_4px_15px_20px_var(--accent-color)] text-right z-10">
					<h2 className="mb-4 text-4xl secondary-font text-(--main-color)">{dict.aboutUsPage.iconTitle}</h2>

					<p className="mb-4 text-xl text-white">{dict.aboutUsPage.iconText}</p>
					</div>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="max-w-360 mx-auto text-xl">
                    <h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">{dict.aboutUsPage.hope1Title}</h2>

                    <p>{dict.aboutUsPage.hope1Text1}</p>
                    <br />
                    <p>{dict.aboutUsPage.hope1Text2}</p>
                    <br />
                    <p className="text-(--main-color)">{dict.aboutUsPage.hope1Text3}</p>
                </div>
            </section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-(--main-color) z-20">
				<div className="max-w-360 mx-auto text-xl text-white">
                    <h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">{dict.aboutUsPage.seeds2Title}</h2>

                    <p>{dict.aboutUsPage.seeds2Text1}</p>
                    <p>{dict.aboutUsPage.seeds2Text2}</p>

                    <ul className="mb-4 ps-12 list-disc">
                        <li>{dict.aboutUsPage.seeds2Item1}</li>
                        <li>{dict.aboutUsPage.seeds2Item2}</li>
                        <li>{dict.aboutUsPage.seeds2Item3}</li>
                    </ul>

				    <p className="text-(--accent-color)">{dict.aboutUsPage.seeds2Text3}</p>
                </div>
            </section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="max-w-360 mx-auto text-xl">
                    <h2 className="mb-4 text-3xl secondary-font text-(--main-color) text-center">{dict.aboutUsPage.movement3Title}</h2>

                    <p>{dict.aboutUsPage.movement3Text1}</p>
                    <p>{dict.aboutUsPage.movement3Text2}</p>

                    <ul className="mb-4 ps-12 list-disc">
                        <li>{dict.aboutUsPage.movement3Item1}</li>
                        <li>{dict.aboutUsPage.movement3Item2}</li>
                        <li>{dict.aboutUsPage.movement3Item3}</li>
                    </ul>

                    <p className="text-(--main-color)">{dict.aboutUsPage.movement3Text3}</p>
                </div>
            </section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-(--accent-color) z-20">
				<div className="max-w-360 mx-auto text-xl">
                    <h2 className="mb-4 text-3xl secondary-font text-white text-center">{dict.aboutUsPage.knowledge4Title}</h2>

                    <p>{dict.aboutUsPage.knowledge4Text1}</p>
                    <br />
                    <p>{dict.aboutUsPage.knowledge4Text2}</p>
                    <br />
                    <p className="text-white">{dict.aboutUsPage.knowledge4Text3}</p>
                </div>
            </section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="max-w-360 mx-auto text-xl">
                    <h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">{dict.aboutUsPage.sense5Title}</h2>

                    <p>{dict.aboutUsPage.sense5Text1}</p>

                    <ul className="mb-4 ps-12 list-disc">
                        <li>{dict.aboutUsPage.sense5Item1}</li>
                        <li>{dict.aboutUsPage.sense5Item2}</li>
                        <li>{dict.aboutUsPage.sense5Item3}</li>
                    </ul>

                    <p className="mb-4">{dict.aboutUsPage.sense5Text2}</p>

				    <p className="text-(--main-color)">{dict.aboutUsPage.sense5Text3}</p>
				</div>
			</section>
		</main>
	);
}
