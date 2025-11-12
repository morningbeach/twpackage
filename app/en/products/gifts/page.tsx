import ProductsGrid from '@/components/ProductsGrid'
import data from '@/content/products/en/gifts.json'

export default function GiftsPage(){
  return <ProductsGrid items={data as any}/>
}
