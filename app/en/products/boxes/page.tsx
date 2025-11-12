import ProductsGrid from '@/components/ProductsGrid'
import data from '@/content/products/en/boxes.json'

export default function BoxesPage(){
  return <ProductsGrid items={data as any}/>
}
