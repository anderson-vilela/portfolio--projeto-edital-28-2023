export interface DadosGerais {
  usuarios_registrados: number
  incricoes_realizadas: number
  cursos_ativos: number
  direito_certificacao: number
  investimento_medio_curso: string
  investimento_medio_aluno: string
}

export interface UsuariosPorCurso {
  curso: string
  usuarios: number
}

export interface UsuariosPorEstado {
  estados: string
  usuarios_totais: number
  direito_certificacao: number
}

export interface TransparencyType {
  dados_gerais: DadosGerais
  usuarios_por_curso: UsuariosPorCurso[]
  usuarios_por_estado: UsuariosPorEstado[]
}
