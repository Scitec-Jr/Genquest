import Link from "next/link";

export default async function NotFound() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
			<h1 className="text-4xl md:text-5xl font-semibold text-(--main-color) mb-4">
				Página não encontrada
			</h1>

			<p className="text-base md:text-lg text-(--secondary-color) mb-8 max-w-md">
				A página que você tentou acessar está em desenvolvimento ou não existe.
			</p>

			<Link
				href="/pt"
				className="inline-block rounded-xl px-6 py-3 font-medium
					bg-(--accent-color)
					text-black
					hover:bg-(--secondary-accent-color)
					transition-colors"
			>
				Retornar para a página inicial
			</Link>
		</main>
	);
}
