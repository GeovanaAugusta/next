import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello World Next Js</h1>     
        <ul>
          <li> 
            <Link href="/products">Produtos</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          </ul>   
      </div>
    </>
  )
}
