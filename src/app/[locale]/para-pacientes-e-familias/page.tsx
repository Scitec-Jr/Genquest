import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="py-8 px-4 md:px-8">
				<div className="max-w-360 mx-auto">
					<h1 className="mb-8 text-6xl secondary-font text-(--accent-color) text-center">{dict.patientsAndFamily.title}</h1>

					<div className="w-fit max-w-full mx-auto p-4 md:p-8 bg-(--main-color) rounded-xl text-white">
						<h2 className="mb-8 text-2xl secondary-font text-(--accent-color) text-center">{dict.patientsAndFamily.guideTitle}</h2>

						<div className="flex flex-col md:flex-row items-center justify-center gap-4">
							<div className="flex flex-col items-center w-60">
								<div className="flex items-center justify-center w-8 h-8 mb-4 bg-(--secondary-color) rounded-full">1</div>

								<h3 className="mb-4">{dict.patientsAndFamily.guideStep1}</h3>
								<p className="text-center">{dict.patientsAndFamily.guideStep1Text}</p>
							</div>

							<div className="flex items-center w-8">
								<Image src="/assets/icons/arrowRight.png" alt="Pos" width={40} height={40} className="my-2 rotate-90 md:rotate-0" />
							</div>

							<div className="flex flex-col items-center w-60">
								<div className="flex items-center justify-center w-8 h-8 mb-4 bg-(--secondary-color) rounded-full">2</div>

								<h3 className="mb-4">{dict.patientsAndFamily.guideStep1}</h3>
								<p className="text-center">{dict.patientsAndFamily.guideStep1Text}</p>
							</div>

							<div className="flex items-center w-8">
								<Image src="/assets/icons/arrowRight.png" alt="Pos" width={40} height={40} className="my-2 rotate-90 md:rotate-0" />
							</div>

							<div className="flex flex-col items-center w-60">
								<div className="flex items-center justify-center w-8 h-8 mb-4 bg-(--secondary-color) rounded-full">3</div>

								<h3 className="mb-4">{dict.patientsAndFamily.guideStep1}</h3>
								<p className="text-center">{dict.patientsAndFamily.guideStep1Text}</p>
							</div>

							<div className="flex items-center w-8">
								<Image src="/assets/icons/arrowRight.png" alt="Pos" width={40} height={40} className="my-2 rotate-90 md:rotate-0" />
							</div>

							<div className="flex flex-col items-center w-60">
								<div className="flex items-center justify-center w-8 h-8 mb-4 bg-(--secondary-color) rounded-full">4</div>

								<h3 className="mb-4">{dict.patientsAndFamily.guideStep1}</h3>
								<p className="text-center">{dict.patientsAndFamily.guideStep1Text}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 bg-(--main-color) text-(--accent-color)">
				<div className="max-w-360 mx-auto">
					<h2 className="mb-8 text-4xl secondary-font">{dict.patientsAndFamily.historyTitle}</h2>

					<Image src="/assets/images/history.png" alt="História" width={720} height={400} className="lg:w-3/4 mx-auto" />
				</div>
			</section>

			<section className="py-8 px-4 md:px-8">
				<div className="max-w-360 mx-auto">
					<h2 className="mb-8 text-4xl secondary-font text-(--accent-color) text-center">{dict.patientsAndFamily.testimonialTitle}</h2>

					<Carousel showDots={false}>
						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-4">
							<div className="p-8 bg-(--main-color) rounded-xl text-(--accent-color)">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<div className="flex flex-col sm:flex-row gap-8 items-end justify-end">
									<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>

									<div className="w-full sm:w-1/2 aspect-2/1 relative">
										<Image src="/assets/images/partners.png" alt="Placeholder" fill className="w-full" />
									</div>
								</div>
							</div>
						</div>

						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-4">
							<div className="p-8 bg-(--main-color) rounded-xl text-(--accent-color)">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<div className="flex flex-col sm:flex-row gap-8 items-end justify-end">
									<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>

									<div className="w-full sm:w-1/2 aspect-2/1 relative">
										<Image src="/assets/images/partners.png" alt="Placeholder" fill className="w-full" />
									</div>
								</div>
							</div>
						</div>

						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-4">
							<div className="p-8 bg-(--main-color) rounded-xl text-(--accent-color)">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<div className="flex flex-col sm:flex-row gap-8 items-end justify-end">
									<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>

									<div className="w-full sm:w-1/2 aspect-2/1 relative">
										<Image src="/assets/images/partners.png" alt="Placeholder" fill className="w-full" />
									</div>
								</div>
							</div>
						</div>

                        <div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-4">
							<div className="p-8 bg-(--main-color) rounded-xl text-(--accent-color)">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<div className="flex flex-col sm:flex-row gap-8 items-end justify-end">
									<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>

									<div className="w-full sm:w-1/2 aspect-2/1 relative">
										<Image src="/assets/images/partners.png" alt="Placeholder" fill className="w-full" />
									</div>
								</div>
							</div>
						</div>
					</Carousel>

					<a href="" className="block w-fit mt-8 ms-auto py-2 px-4 bg-(--accent-color) hover:bg-(--main-color) border-2 border-(--accent-color) rounded-full text-lg text-(--main-color) hover:text-(--accent-color) transition-colors">
						{dict.activity.heroCTAButton}
					</a>
				</div>
			</section>

            <section className="py-8 px-4 md:px-8 bg-(--accent-color)">
                <div className="max-w-360 mx-auto">
                    <h2 className="mb-8 text-4xl secondary-font">{dict.patientsAndFamily.curiosityTitle}</h2>

                    <Carousel autoplay leftArrowSrc={"/assets/icons/carouselArrowLeft2.png"} rightArrowSrc={"/assets/icons/carouselArrowRight2.png"} showDots={false} align="center">
                        <div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto px-4">
							<div className="flex flex-col items-center w-60">
                                <Image src="/assets/images/placeholder.png" alt="Curiosidade 1" width={200} height={200} className="mb-4" />

                                <div className="p-8">
                                    <h3 className="mb-4 text-lg font-semibold">{dict.patientsAndFamily.curiosityTitle1}</h3>
                                    <p>{dict.patientsAndFamily.curiosityText1}</p>
                                </div>
                            </div>
						</div>

                        <div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto px-4">
							<div className="flex flex-col items-center w-60">
                                <Image src="/assets/images/placeholder.png" alt="Curiosidade 1" width={200} height={200} className="mb-4" />

                                <div className="p-8">
                                    <h3 className="mb-4 text-lg font-semibold">{dict.patientsAndFamily.curiosityTitle1}</h3>
                                    <p>{dict.patientsAndFamily.curiosityText1}</p>
                                </div>
                            </div>
						</div>

                        <div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto px-4">
							<div className="flex flex-col items-center w-60">
                                <Image src="/assets/images/placeholder.png" alt="Curiosidade 1" width={200} height={200} className="mb-4" />

                                <div className="p-8">
                                    <h3 className="mb-4 text-lg font-semibold">{dict.patientsAndFamily.curiosityTitle1}</h3>
                                    <p>{dict.patientsAndFamily.curiosityText1}</p>
                                </div>
                            </div>
						</div>

                        <div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto px-4">
							<div className="flex flex-col items-center w-60">
                                <Image src="/assets/images/placeholder.png" alt="Curiosidade 1" width={200} height={200} className="mb-4" />

                                <div className="p-8">
                                    <h3 className="mb-4 text-lg font-semibold">{dict.patientsAndFamily.curiosityTitle1}</h3>
                                    <p>{dict.patientsAndFamily.curiosityText1}</p>
                                </div>
                            </div>
						</div>
                    </Carousel>
                </div>
            </section>
		</main>
	);
}
