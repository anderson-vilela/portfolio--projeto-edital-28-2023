import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { GrUserExpert } from 'react-icons/gr'
import { VscLoading } from 'react-icons/vsc'

type LoginAndRegisterButtonsProps = {
  user: User | null
}

const LoginAndRegisterButtons = ({ user }: LoginAndRegisterButtonsProps) => {
  return (
    <div>
      <ClerkLoading>
        <div
          id="buttons-mobile"
          className="group flex items-center gap-4 sm:relative md:hidden"
        >
          <GrUserExpert className="animate-pulse text-[26px] text-tw-secundary-color-light" />
        </div>
        <div
          id="buttons-desktop"
          className="flex items-center gap-4 max-md:hidden"
        >
          <button className="flex animate-pulse items-center justify-center rounded-[16px] border border-tw-secundary-color-light bg-transparent px-8 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 xl:h-[34px] xl:w-[85px] 2xl:h-[37px] 2xl:w-[91px] min-[1920px]:h-[46px] min-[1920px]:w-[120px]">
            <VscLoading className="animate-spin" />
          </button>
          <button className="flex animate-pulse items-center justify-center rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark xl:h-[34px] xl:w-[110px] 2xl:h-[37px] 2xl:w-[121px] min-[1920px]:h-[46px] min-[1920px]:w-[155px]">
            <VscLoading className="animate-spin" />
          </button>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div className="flex items-center justify-center gap-2">
            {user?.firstName ? (
              <span className="text-tw-text-18 font-semibold">
                Olá, {user?.firstName}
              </span>
            ) : (
              <span className="text-tw-text-18 font-semibold">Bem vindo!</span>
            )}

            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div
            id="buttons-mobile"
            className="group flex items-center gap-4 sm:relative md:hidden"
          >
            <GrUserExpert className="text-[26px] text-tw-secundary-color-light" />
            <div
              className="absolute right-0 z-50 hidden rounded-b-2xl border-2 border-tw-primary-color-dark bg-tw-neutral-0 group-hover:grid max-sm:top-0
        max-sm:w-full sm:top-[-10px] sm:w-[240px]"
            >
              <span className="block break-keep bg-tw-neutral-200 p-4 text-center font-bold text-tw-primary-color-dark">
                Login / Cadastro
              </span>
              <hr />
              <div className="grid gap-4 px-8 py-4">
                <SignInButton mode="modal">
                  <button className="rounded-[16px] border border-tw-secundary-color-light bg-transparent px-4 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
                    Entrar
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
                    Cadastrar
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
          <div
            id="buttons-desktop"
            className="flex items-center gap-4 max-md:hidden"
          >
            <SignInButton mode="modal">
              <button className="rounded-[16px] border border-tw-secundary-color-light bg-transparent px-4 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
                Entrar
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
                Cadastrar
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </ClerkLoaded>
    </div>
  )
}

export default LoginAndRegisterButtons
