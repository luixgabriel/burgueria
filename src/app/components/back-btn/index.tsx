'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineLeft } from 'react-icons/ai'

interface BackBtnProps {
  path: string
}

const BackBtn = ({ path }: BackBtnProps) => {
  const router = useRouter()
  return (
    <span
      className="flex items-center gap-1 p-1 leading-4 text-gray-500 cursor-pointer"
      onClick={() => router.push(path)}
    >
      <AiOutlineLeft size={15} />
      Voltar
    </span>
  )
}

export default BackBtn
