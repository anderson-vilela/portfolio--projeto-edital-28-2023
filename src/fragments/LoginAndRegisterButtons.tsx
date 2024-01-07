import { GrUserExpert } from 'react-icons/gr'

const LoginAndRegisterButtons = () => {
  return (
    <div>
      <div
        id="buttons-mobile"
        className="group relative flex items-center gap-4 md:hidden"
      >
        <GrUserExpert className="text-[26px] text-tw-secundary-color-light" />
        <div
          className="absolute right-0 top-[-10px] z-50 hidden w-[240px] rounded-b-2xl border-2
        border-tw-primary-color-dark bg-tw-neutral-0 group-hover:grid"
        >
          <span className="block break-keep bg-tw-neutral-200 p-4 text-center font-bold text-tw-primary-color-dark">
            Login / Cadastro
          </span>
          <hr />
          <div className="grid gap-4 px-8 py-4">
            <button className="rounded-[16px] border border-tw-secundary-color-light bg-transparent px-4 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
              Entrar
            </button>
            <button className="rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
      <div
        id="buttons-desktop"
        className="flex items-center gap-4 max-md:hidden"
      >
        <button className="rounded-[16px] border border-tw-secundary-color-light bg-transparent px-4 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
          Entrar
        </button>
        <button className="rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
          Cadastrar
        </button>
      </div>
    </div>
  )
}

export default LoginAndRegisterButtons
