import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useLocalData, sumSpendByLabel } from '../DataManagement';
import { Chartdata } from '../ChartConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart() {
  const localData = useLocalData();
  const ReduceLabels = [...new Set(localData.Group)];
  const startDate = localStorage.getItem('startDate');
  const endDate = localStorage.getItem('endDate');
  const SpendData = ReduceLabels.map(
    (label) => sumSpendByLabel(startDate, endDate, localData)[label]
  );
  const labels = ReduceLabels;
  const spendData = SpendData;
  const data = Chartdata(labels, spendData);

  const theme = localStorage.getItem('theme') === true;

  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme ? 'white' : 'black',
          font: {
            family: 'GmarketSansTTFLight',
          },
        },
      },
      tooltip: {
        color: theme ? 'white' : 'black',
        bodyFont: {
          family: 'GmarketSansTTFLight',
        },
      },
    },
  };

  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}
