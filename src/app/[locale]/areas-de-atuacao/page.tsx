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
					<h1 className="mb-8 text-6xl text-(--accent-color) text-center">{dict.activity.title}</h1>

					<div className="flex flex-wrap justify-center gap-8">
						<div className="flex flex-col w-80 pb-4 bg-(--main-color) text-(--accent-color) rounded-4xl">
							<Image src="/assets/images/industries.png" alt="Áreas de Atuação" width={400} height={200} className="w-full mb-4" />

							<h2 className="px-4">{dict.activity.industriesCard}</h2>
							<p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente asperiores, maxime ab cupiditate animi fuga eum aut quis assumenda autem quia quos deleniti est, laboriosam vitae nobis amet suscipit quasi iusto accusamus quaerat sequi. Reprehenderit architecto ipsam eius explicabo atque voluptas quidem in inventore, vel necessitatibus sed? Quisquam, ex?</p>
						</div>

						<div className="flex flex-col w-80 pb-4 bg-(--main-color) text-(--accent-color) rounded-4xl">
							<Image src="/assets/images/partners.png" alt="Áreas de Atuação" width={400} height={200} className="w-full mb-4" />

							<h2 className="px-4">{dict.activity.partnersCard}</h2>
							<p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente asperiores, maxime ab cupiditate animi fuga eum aut quis assumenda autem quia quos deleniti est, laboriosam vitae nobis amet suscipit quasi iusto accusamus quaerat sequi. Reprehenderit architecto ipsam eius explicabo atque voluptas quidem in inventore, vel necessitatibus sed? Quisquam, ex?</p>
						</div>

						<div className="flex flex-col w-80 pb-4 bg-(--main-color) text-(--accent-color) rounded-4xl">
							<Image src="/assets/images/colaboration.png" alt="Áreas de Atuação" width={400} height={200} className="w-full mb-4" />

							<h2 className="px-4">{dict.activity.colaborationCard}</h2>
							<p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente asperiores, maxime ab cupiditate animi fuga eum aut quis assumenda autem quia quos deleniti est, laboriosam vitae nobis amet suscipit quasi iusto accusamus quaerat sequi. Reprehenderit architecto ipsam eius explicabo atque voluptas quidem in inventore, vel necessitatibus sed? Quisquam, ex?</p>
						</div>
					</div>
				</div>
			</section>

			<section className="p-4 md:px-8">
				<div className="max-w-360 mx-auto text-(--accent-color)">
					<h2 className="mb-8 text-4xl text-(--accent-color) text-center">{dict.activity.partnersTitle}</h2>

					<Carousel showDots={false}>
						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-12">
							<div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
								<div className="shrink-0">
									<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} />
								</div>

								<div>
									<h2 className="text-xl">{dict.activity.carouselTitle1}</h2>
									<p>{dict.activity.carouselText1}</p>
								</div>
							</div>
						</div>

						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-12">
							<div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
								<div className="shrink-0">
									<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} />
								</div>

								<div>
									<h2 className="text-xl">{dict.activity.carouselTitle1}</h2>
									<p>{dict.activity.carouselText1}</p>
								</div>
							</div>
						</div>

						<div className="min-w-full lg:min-w-auto lg:flex-[0_0_50%] px-12">
							<div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
								<div className="shrink-0">
									<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} />
								</div>

								<div>
									<h2 className="text-xl">{dict.activity.carouselTitle1}</h2>
									<p>{dict.activity.carouselText1}</p>
								</div>
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="p-4 sm:py-0 md:px-20 bg-(--accent-color)">
				<div className="flex items-center gap-16 max-w-360 mx-auto">
					<div className="sm:w-1/2">
						<h2 className="mb-8 text-2xl text">{dict.activity.heroCTA}</h2>

						<a href="" className="py-2 px-4 bg-(--main-color) rounded-full text-lg text-(--accent-color)">
							{dict.activity.heroCTAButton}
						</a>
					</div>

                    <Image src="/assets/images/colaboration.png" alt="Ilustração de Contato" width={300} height={300} className="hidden sm:block mx-auto"/>
				</div>
			</section>

            <section className="py-8 px-4 md:px-8 bg-(--main-color)">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-360 mx-auto">
                    <div className="w-68 p-4 bg-white rounded-4xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl">{dict.activity.missionCardTitle}</h2>

                            <Image src="/assets/icons/mission.png" alt="Missão" width={40} height={40} />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex est debitis odio. Vero distinctio, numquam libero id minima deserunt, cumque et animi vitae quisquam aut veritatis unde dolores velit beatae nam. Debitis illo ducimus eum, tenetur distinctio porro ab commodi ad, reiciendis, eligendi officia perspiciatis quisquam itaque voluptatum pariatur!</p>
                    </div>

                    <div className="w-68 p-4 bg-white rounded-4xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl">{dict.activity.visionCardTitle}</h2>

                            <Image src="/assets/icons/mission.png" alt="Missão" width={40} height={40} />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex est debitis odio. Vero distinctio, numquam libero id minima deserunt, cumque et animi vitae quisquam aut veritatis unde dolores velit beatae nam. Debitis illo ducimus eum, tenetur distinctio porro ab commodi ad, reiciendis, eligendi officia perspiciatis quisquam itaque voluptatum pariatur!</p>
                    </div>

                    <div className="w-68 p-4 bg-white rounded-4xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl">{dict.activity.valuesCardTitle}</h2>

                            <Image src="/assets/icons/mission.png" alt="Missão" width={40} height={40} />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex est debitis odio. Vero distinctio, numquam libero id minima deserunt, cumque et animi vitae quisquam aut veritatis unde dolores velit beatae nam. Debitis illo ducimus eum, tenetur distinctio porro ab commodi ad, reiciendis, eligendi officia perspiciatis quisquam itaque voluptatum pariatur!</p>
                    </div>
                </div>
            </section>
		</main>
	);
}
