import { notFound } from 'next/navigation'
import ProductPage from '@/components/ProductPage'
import gifts from '@/content/products/en/gifts.json'
import boxes from '@/content/products/en/boxes.json'
import sets from '@/content/products/en/sets.json'

const all = [...(gifts as any), ...(boxes as any), ...(sets as any)]

type Params = { slug: string }

export function generateStaticParams() {
  return all.map((p: any) => ({ slug: p.slug }))
}

export default async function ProductDetail({
  params,
}: { params: Promise<Params> }) {
  const { slug } = await params
  const product = all.find((p: any) => p.slug === slug)
  if (!product) return notFound()
  return <ProductPage product={product} />
}
