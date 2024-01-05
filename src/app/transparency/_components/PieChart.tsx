'use client'

import { UsuariosPorCurso } from '@/types/Transparency'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type PieChartProps = {
  data: UsuariosPorCurso[]
}

const createColors = (colorsSetSize: number, mainList: string[]) => {
  const colorsSetData = new Set(mainList)

  while (colorsSetData.size < colorsSetSize) {
    const hexColor = Math.floor(Math.random() * 16777215).toString(16)
    colorsSetData.add(hexColor)
  }

  return Array.from(colorsSetData)
}

const PieChart = ({ data: dataProps }: PieChartProps) => {
  const mainColors = ['#ffffff', '#d2202c', '#707070', '#2f2e41']
  const colorsForChart = createColors(dataProps.length, mainColors)

  const sumUsuarios = dataProps.reduce((accumulator, { usuarios }) => {
    const total = Number(accumulator) + Number(usuarios)

    return total
  }, 0)

  const options = {
    title: {
      text: '',
    },
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: false,
          },
        ],
      },
    },
    colors: colorsForChart,
    series: [
      {
        name: 'Percentual',
        colorByPoint: true,
        data: dataProps.map((data, index) => {
          const yNumber = Number(
            ((data.usuarios / sumUsuarios) * 100).toFixed(2),
          )

          return {
            name: data.curso,
            y: yNumber,
          }
        }),
      },
    ],
  }

  return (
    <section className="container rounded-[20px] bg-tw-neutral-100 p-8 shadow-md">
      <h2 className="text-center text-[25px] text-tw-primary-color-light">
        Usuários por curso
      </h2>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className="mt-10 grid gap-4">
          {dataProps.map((data, index) => (
            <div key={index} className="flex gap-2">
              <div
                className="block h-[20px] w-[20px] rounded-full"
                style={{ background: `${colorsForChart[index]}` }}
              />
              <span className="text-base font-bold">{data.curso}:</span>
              <span className="text-base font-bold">
                {data.usuarios.toLocaleString('pt-BR')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PieChart
