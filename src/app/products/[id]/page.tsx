import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Package, Beaker } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductActions } from "@/components/sections/ProductActions";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/#products"
            className="inline-flex items-center text-muted-foreground hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground capitalize">
                {product.category}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-secondary mt-4">{product.price}</p>
              </div>

              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-green-500 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              <p className="text-muted-foreground text-lg">{product.description}</p>

              <ProductActions />

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Beaker className="h-5 w-5 mr-2 text-secondary" />
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.specifications.formula && (
                      <div>
                        <p className="text-sm text-muted-foreground">Formula</p>
                        <p className="font-medium text-foreground">{product.specifications.formula}</p>
                      </div>
                    )}
                    {product.specifications.purity && (
                      <div>
                        <p className="text-sm text-muted-foreground">Purity</p>
                        <p className="font-medium text-foreground">{product.specifications.purity}</p>
                      </div>
                    )}
                    {product.specifications.packaging && (
                      <div>
                        <p className="text-sm text-muted-foreground">Packaging</p>
                        <p className="font-medium text-foreground">{product.specifications.packaging}</p>
                      </div>
                    )}
                    {product.specifications.casNumber && (
                      <div>
                        <p className="text-sm text-muted-foreground">CAS Number</p>
                        <p className="font-medium text-foreground">{product.specifications.casNumber}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Package className="h-5 w-5 mr-2 text-accent" />
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <Check className="h-4 w-4 mr-2 text-secondary" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
