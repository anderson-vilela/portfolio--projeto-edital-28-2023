const SectionPartners = () => {
  return (
    <section className="container mb-[132px] mt-[94px]">
      <h2 className="text-tw-text-30 text-center font-semibold text-tw-primary-color">
        Parceiros
      </h2>
      <div className="mt-[30px] grid grid-cols-4 gap-8 rounded-[20px] bg-tw-neutral-100 px-[32px] py-[26px] text-center max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <h3 className="text-tw-text-26">Governo do RN</h3>
          <p className="text-tw-text-18 mt-4 font-semibold text-tw-secundary-color-light">
            Governo do Estado do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-tw-text-26">SESAP</h3>
          <p className="text-tw-text-18 mt-4 font-semibold text-tw-secundary-color-light">
            Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-tw-text-26">UFRN</h3>
          <p className="text-tw-text-18 mt-4 font-semibold text-tw-secundary-color-light">
            Universidade Federal do Rio Grande do Norte.
          </p>
        </div>
        <div>
          <h3 className="text-tw-text-26">HUOL</h3>
          <p className="text-tw-text-18 mt-4 font-semibold text-tw-secundary-color-light">
            Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade
            Federal do Rio Grande do Norte).{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionPartners
