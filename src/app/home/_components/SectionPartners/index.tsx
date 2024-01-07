const SectionPartners = () => {
  return (
    <section className="container mb-[132px] mt-[94px]">
      <h2 className="text-center text-[30px] font-semibold text-tw-primary-color">
        Parceiros
      </h2>
      <div className="mt-[30px] grid grid-cols-4 gap-8 rounded-[20px] bg-tw-neutral-100 px-[32px] py-[26px] text-center max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <h3 className="text-25px">Governo do RN</h3>
          <p className="mt-4 text-[18px] font-semibold text-tw-secundary-color-light">
            Governo do Estado do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-25px">SESAP</h3>
          <p className="mt-4 text-[18px] font-semibold text-tw-secundary-color-light">
            Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-25px">UFRN</h3>
          <p className="mt-4 text-[18px] font-semibold text-tw-secundary-color-light">
            Universidade Federal do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-25px">HUOL</h3>
          <p className="mt-4 text-[18px] font-semibold text-tw-secundary-color-light">
            Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade
            Federal do Rio Grande do Norte).{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionPartners
