import Link from 'next/link'
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (

<ul className={styles.navbar}>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/products">Produtos</Link></li>
  <li><Link href="/about">Sobre nós</Link></li>
  <li><Link href="/contact">Fale com a gente</Link></li>
</ul> 


  )

}