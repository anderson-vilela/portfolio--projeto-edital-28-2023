import logoAvaSusMobile from '@/assets/img/logo-avasus-mobile.png'
import logoAvaSusDesktop from '@/assets/img/logo-avasus.svg'
import LoginAndRegisterButtons from '@/fragments/LoginAndRegisterButtons'
import NavBarDesktop from '@/fragments/NavBarDesktop'
import NavBarMobile from '@/fragments/NavBarMobile'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import SearchButton from './SearchButton'

const Header = async () => {
  const user: User | null = await currentUser()

  return (
    <header className="fixed left-0 top-0 z-50 grid min-h-[100px] w-full gap-2 bg-tw-neutral-0 px-5 py-5 font-bold text-tw-neutral-400 drop-shadow-md xl:px-10 2xl:text-[18px] min-[1800px]:gap-4 min-[1800px]:px-20 min-[1800px]:text-xl">
      <div className="flex w-full items-center justify-between md:gap-8">
        <div className="flex items-center gap-2">
          <Link id="logo-mobile" href="/home" className="md:hidden">
            <Image
              src={logoAvaSusMobile}
              alt="Logomarca"
              width={35}
              className=""
            />
          </Link>
          <Link id="logo-desktop" href="/home" className="max-md:hidden">
            <Image
              src={logoAvaSusDesktop}
              alt="Logomarca"
              width={200}
              className="h-[22px] w-[100px] xl:h-[33px] xl:w-[150px] 2xl:h-[44px] 2xl:w-[200px]"
            />
          </Link>
          <div className="h-[44px] w-[2px] rounded-full bg-tw-neutral-300 max-md:h-[40px] tw-default:hidden" />
          <NavBarMobile />
        </div>
        <div className="flex items-center gap-4 max-sm:gap-0">
          <NavBarDesktop />
          <SearchButton />
          <LoginAndRegisterButtons user={user} />
        </div>
      </div>
    </header>
  )
}

export default Header
