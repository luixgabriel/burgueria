import Image from 'next/image'
import logo from '../assets/logo.png'
import { AiFillShopping, AiFillHeart } from 'react-icons/ai'
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({ subsets: ['latin'], weight: '400' })

const Header = () => {
  return (
    <header className={`${lilita.className} flex justify-between px-5 py-5`}>
      <div className="flex items-center gap-3">
        <Image src={logo} alt="burgueria" className="w-[70px] h-[70px]" />
        <h1 className="text-primary font-bold text-lg">BURGUERIA</h1>
      </div>
      <div className="flex items-center gap-3 ">
        <span>
          <AiFillHeart color="#004083" size={25} />
        </span>
        <span>
          <AiFillShopping color="#004083" size={25} />
        </span>
      </div>
    </header>
  )
}

export default Header
