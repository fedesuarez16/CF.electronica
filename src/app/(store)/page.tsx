import Image from "next/image";
import type { Metadata } from "next/types";
import * as Commerce from "commerce-kit";
import ImageOne from "./hero.png";
import { ProductList } from "@/ui/products/productList";
import { CategoryBox } from "@/ui/CategoryBox";
import AccessoriesImage from "@/images/accessories.png";
import ApparelImage from "@/images/electrodomesticos.png";
import { YnsLink } from "@/ui/YnsLink";
import { publicUrl } from "@/env.mjs";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });

	return (
		<main>
			<section className="rounded bg-neutral-900 py-8 sm:py-12">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
							Descubri la coleccion de productos de{" "}
							<p className="text-neutral-600">CF electronica</p>
						</h2>
						<p className="text-pretty text-white">
							Explora nuestra seleccion de productos y encontra lo que estas buscando{" "}
						</p>
						<YnsLink
							className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 font-medium text-neutral-500 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
							href="/products"
						>
							Compra ahora.
						</YnsLink>
					</div>
					<Image
						alt="Cup of coffee"
						loading="eager"
						priority={true}
						className="rounded"
						height={450}
						width={450}
						src={ImageOne}
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/>
				</div>
			</section>
			<ProductList products={products} />

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						{ categorySlug: "accesorios", src: AccessoriesImage },
						{ categorySlug: "electrodomesticos", src: ApparelImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
