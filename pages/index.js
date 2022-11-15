import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (<div className='flex mx-auto  mt-4 flex-wrap w-10/12 lg:w-9/12  gap-3' >
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
  )
}
