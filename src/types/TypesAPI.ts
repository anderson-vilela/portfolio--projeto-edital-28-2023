export enum Cateroria {
  Acessibilidade = 'Acessibilidade',
  Covid19 = 'Covid 19',
  DoençasRaras = 'Doenças raras',
  Especialização = 'Especialização',
  MóduloDeExtensão = 'Módulo de extensão',
  Opas = 'OPAS',
  Preceptoria = 'Preceptoria',
  SistemaPrisional = 'Sistema prisional',
  SíflisEOutrasIst = 'Síflis e outras ist',
  WebPalestras = 'WebPalestras',
}

export interface Credito {
  capa: string
  titulo: string
}

export interface APIDataType {
  id: number
  cateroria: Cateroria
  capa: string
  titulo: string
  parceiros: string
  resumo: string
  duracao: string
  matriculados: number
  criado_em: string
  avaliacao: string
  numero_avaliacoes: number
  sobre: string
  objetivo_geral?: string
  objetivo_especifico?: string
  conteudo: Array<null | string>
  creditos: Credito[]
  recursos_educacionais?: string
}
