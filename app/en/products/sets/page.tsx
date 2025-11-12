import ProductsGrid from '@/components/ProductsGrid'
import data from '@/content/products/en/sets.json'

export default function SetsPage(){
  return <ProductsGrid items={data as any}/>
}
