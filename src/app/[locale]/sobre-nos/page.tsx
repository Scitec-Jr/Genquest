import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="relative py-8 px-4 md:px-8 bg-white z-20">
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

			<section className="relative py-8 px-4 md:px-8 bg-(--main-color) z-20">
				<div className="flex flex-col md:flex-row">
					<div className="flex items-center flex-1 p-4">
						<h2 className="mb-4 text-4xl secondary-font text-(--accent-color)">Compromisso com Excelência</h2>
					</div>

				<div className="flex-1 overflow-hidden">
						<Carousel showDots={false}>
							<div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">1.</span>
                                        <b>Garantir</b> a qualidade integridade e rastreabilidade do produto em toda a cadeia de suprimentos: desde a seleção e qualificação de fornecedores internacionais, a verificação de certificados, o controle de condições de transporte até a entrega final ao paciente ou à instituição de saúde.
                                    </p>
								</div>
							</div>

							<div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">2.</span>
                                        <b>Assegurar</b> o cumprimento rigoroso das exigências regulatórias da Anvisa, Receita Federal e demais órgãos envolvidos no desembaraço aduaneiro e vigilância sanitária.
                                    </p>
								</div>
							</div>

                            <div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">3.</span>
                                        <b>Priorizar</b> a segurança do paciente como valor supremo: identificando corretamente a necessidade terapêutica, monitorando continuamente a demanda, prevenindo interrupções no tratamento e fornecendo suporte completo para o início e continuidade do uso do medicamento.
                                    </p>
								</div>
							</div>

                            <div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">4.</span>
                                        <b>Promover</b> educação e transparência no comércio exterior junto a pacientes, médicos, instituições públicas/privadas e planos de saúde, reduzindo riscos regulatórios, atrasos e custos desnecessários.
                                    </p>
								</div>
							</div>

                            <div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">5.</span>
                                        <b>Manter</b> relacionamento ético e de confiança com fabricantes globais, distribuidores, importadores públicos e privados, garantindo negociações transparentes, gestão eficiente de pagamentos internacionais e prazos de entrega compatíveis com a urgência clínica.
                                    </p>
								</div>
							</div>

                            <div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">6.</span>
                                        <b>Implementar</b> e melhorar continuamente o Sistema de Gestão da Qualidade (SGQ), baseado em risco, com indicadores de desempenho, auditorias internas, análise de não conformidades, ações corretivas/preventivas e treinamento constante da equipe.
                                    </p>
								</div>
							</div>

                            <div className="min-w-full px-4">
								<div className="p-8 bg-white rounded-4xl text-black">
									<p>
                                        <span className="text-xl text-(--accent-color) font-medium">7.</span>
                                        <b>Comprometer-se</b> com a melhoria contínua, a satisfação dos stakeholders (pacientes, prescritores, pagadores) e a prevenção de riscos à saúde pública.
                                    </p>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</section>

			<section className="bg-(--accent-color)">
				<div className="flex flex-col md:flex-row">
					<div className="flex-1">
						<Image src="/assets/images/heroAbout.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-100" />
					</div>

					<div className="relative flex flex-col justify-center flex-1 p-4 shadow-[4px_4px_15px_20px_var(--accent-color)] text-right z-10">
						<h2 className="mb-4 text-4xl secondary-font text-(--main-color)">Nosso Ícone</h2>

						<p className="mb-4 text-xl text-white">O dente-de-leão não é apenas um elemento estético do logo da Genquest. Ele é um símbolo conceitual, profundamente conectado à razão de existir da empresa.</p>
					</div>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="text-xl">
					<h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">1. Esperança que nasce em ambientes difíceis</h2>

					<p>O dente-de-leão cresce onde quase nada cresce: frestas, terrenos áridos, margens esquecidas.</p>
					<br />
					<p>Assim como pacientes com doenças raras, que muitas vezes vivem em vazios assistenciais, a flor representa a vida que insiste, mesmo quando o sistema falha.</p>
					<br />
					<p className="text-(--main-color)">A Genquest nasce exatamente nesses espaçow negligenciados do sistema de saúde.</p>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-(--main-color) z-20">
				<div className="text-xl text-white">
					<h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">2. Cada semente é uma jornada de acesso</h2>

					<p>Quando o dente-de-leão se dispersa, cada semente carrega a possibilidade de um novo começo.</p>
					<p>Isso reflete o papel da Genquest:</p>

					<ul className="mb-4 ps-12 list-disc">
						<li>Cada medicamento importado</li>
						<li>Cada processo destravado</li>
						<li>Cada estratégia construída</li>
					</ul>

					<p className="text-(--accent-color)">É uma semente de acesso, lançada para alcançar quem precisa, onde quer que esteja.</p>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="text-xl">
					<h2 className="mb-4 text-3xl secondary-font text-(--main-color) text-center">3. Movimento, leveza e alcance</h2>

					<p>O dente-de-leão se move como o vento - não força o caminho, encontra caminhos.</p>
					<p>Essa é a lógica da Genquest:</p>

					<ul className="mb-4 ps-12 list-disc">
						<li>Navegar regulações complexas</li>
						<li>Conectar indústria, governo, médicos e pacientes</li>
						<li>Criar soluções inteligentes e viáveis, sem conforto estéril</li>
					</ul>

					<p className="text-(--main-color)">A leveza do símbolo traduz inteligência estratégica com humanidade.</p>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-(--accent-color) z-20">
				<div className="text-xl">
					<h2 className="mb-4 text-3xl secondary-font text-white text-center">4. Conhecimento que se espalha</h2>

					<p>Na etimologia popular, o dente-de-leão também é associado a saberes tradicionais, cura, observação da natureza.</p>
					<br />
					<p>A Genquest carrega esses mesmo princípio:</p>
					<br />
					<p className="text-white">Transformar conhecimento técnico, regulatório e estratégico em impacto real para pessoas reais.</p>
				</div>
			</section>

			<section className="relative px-4 md:px-8 lg:px-16 py-8 bg-white z-20">
				<div className="text-xl">
					<h2 className="mb-4 text-3xl secondary-font text-(--accent-color) text-center">5. O sentido profundo do logo</h2>

					<p>O logo da Genquest comunica, sem palavras, que a empresa:</p>

					<ul className="mb-4 ps-12 list-disc">
						<li>Não trata medicamentos como commodities</li>
						<li>Não vê acesso como mera burocracia</li>
						<li>Não perde de vista o paciente no centro</li>
					</ul>

					<p className="mb-4">O dente de leão é a metáfora visual da missão da Genquest:</p>

					<p className="text-(--main-color)">Humanizar a jornada do acesso à inovação em saúde, espalhando esperança onde antes havia silêncio.</p>
				</div>
			</section>
		</main>
	);
}
