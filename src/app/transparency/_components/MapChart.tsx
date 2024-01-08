'use client'

import { UsuariosPorEstado } from '@/types/Transparency'
import mapDataBR from '@highcharts/map-collection/countries/br/br-all.geo.json'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from 'highcharts/modules/map'

type MapChartProps = {
  data: UsuariosPorEstado[]
}

const MapChart = ({ data: dataProps }: MapChartProps) => {
  if (typeof Highcharts === 'object') {
    highchartsMap(Highcharts)
  }

  const dataList = dataProps?.map(
    ({ estados: uf, usuarios_totais: usuariosPorEstado }) => [
      `br-${uf.toLocaleLowerCase()}`,
      Number(usuariosPorEstado.toLocaleString('pt-BR')),
    ],
  )

  const mapOptions = {
    chart: {
      map: 'countries/br/br-all',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    mapNavigation: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#d2a1a5'],
        [0.5, '#d26b72'],
        [1, '#d2202c'],
      ],
    },
    series: [
      {
        data: dataList,
        mapData: mapDataBR,
        name: 'Usuários Por Estado',
        states: {
          hover: {
            color: '#b61b26',
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
  }

  return (
    <section className="container rounded-[20px] bg-tw-neutral-100 p-8 shadow-md">
      <h2 className="text-center text-tw-text-26 text-tw-primary-color-light">
        Usuários por estado
      </h2>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={mapOptions}
        />
      </div>
    </section>
  )
}

export default MapChart
