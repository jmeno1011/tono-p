import dynamic from "next/dynamic";
// import Chart from 'react-apexcharts'
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import styled from "styled-components";

const MainChartSectionBlock = styled.div`
  display: flex;
`;
const ChartWrapper = styled.div`
  background-color: #fff;
`;

export default function MainChartSection() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    colors: ["#35BCB2"],
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
  return (
    <MainChartSectionBlock>
      <ChartWrapper className="box-sd2 mr-4">
        <Chart
          options={option}
          series={series}
          type="bar"
          width={700}
          height={400}
        />
      </ChartWrapper>
      <div>
        <ChartWrapper className="box-sd2">
          <Chart
            options={option}
            series={series}
            type="line"
            width={300}
            height={192}
          />
        </ChartWrapper>
        <ChartWrapper className="box-sd2">
          <Chart
            options={option}
            series={series}
            type="line"
            width={300}
            height={192}
          />
        </ChartWrapper>
      </div>
    </MainChartSectionBlock>
  );
}
