'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { Lilita_One } from 'next/font/google'
import { CartControl } from '@/app/components/cart-control'
import { useRouter } from 'next/navigation'
import { FavoriteControl } from '@/app/components/favorite-control'
import FavContainer from './favorite-container'

const lilita = Lilita_One({ subsets: ['latin'], weight: '400' })

const Header = () => {
  const router = useRouter()

  return (
    <header className={`${lilita.className} flex justify-between px-5 py-5 `}>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <Image src={logo} alt="burgueria" className="w-[70px] h-[70px]" />
        <h1 className="text-primary font-bold text-lg">BURGUERIA</h1>
      </div>
      <div className="flex items-center gap-3">
        <span>
          <FavoriteControl />
        </span>
        <span>
          <CartControl />
        </span>
      </div>
      <FavContainer />
    </header>
  )
}

export default Header
