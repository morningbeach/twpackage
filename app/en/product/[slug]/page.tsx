import { notFound } from 'next/navigation'
import ProductPage from '@/components/ProductPage'
import gifts from '@/content/products/en/gifts.json'
import boxes from '@/content/products/en/boxes.json'
import sets from '@/content/products/en/sets.json'

const all = [...(gifts as any), ...(boxes as any), ...(sets as any)]

export default function ProductDetail({params}:{params:{slug:string}}){
  const product = all.find(p=>p.slug===params.slug)
  if(!product) return notFound()
  return <ProductPage product={product}/>
}
