import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  scales,
} from "chart.js";
import DiagonosticList from "./DiagonosticList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = () => {
  const [data, setData] = useState(null);
  const [dataHolder,setDataHolder] = useState(null)
  const [respiratoryRate,setRespiratoryRate] = useState(null)
  const [heartRate,setHeartRate] = useState(null)
  const [temperature,setTemperature] = useState(null)

  // state for levels
  const [temperatureLevels,setTemperatureLevels] = useState(null)
  const [respiratoryLevels,setRespiratoryLevels] = useState(null)
  const [heartLevels,setHeartLevels] = useState(null)



  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
   
    const fetchData = async () =>{
    await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        requestOptions
      )
        .then((response) => response.json())
        // .then((result)=> setDataHolder(result[3]))
        .then((result) => setData(result[3].diagnosis_history))
        .catch((error) => console.error(error));
  
      setRespiratoryRate(data[0]?.respiratory_rate.value)
      setHeartRate(data[0]?.heart_rate.value)
      setTemperature(data[0]?.temperature.value)

      setRespiratoryLevels(data[0].respiratory_rate.levels)
      setHeartLevels(data[0].heart_rate.levels)
      setTemperatureLevels(data[0].temperature.levels)
     
    }

    fetchData()
    
  }, [data,requestOptions]);

  // console.log(data);
// console.log("DATA HOLDER",dataHolder);




  const options = {
    plugins: {
      legend: false,
    },
    
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        // max:10,
        // ticks:{
        //   stepSize:2,
        //   callback:(value)=> value + 'k'
        // }
      },
    },
  };

  const requiredMonths = data
    ?.filter(
      (item) =>
        (item.month === "October" && item.year === 2023) ||
        (item.month === "November" && item.year === 2023) ||
        (item.month === "December" && item.year === 2023) ||
        (item.month === "March" && item.year === 2024) ||
        (item.month === "February" && item.year === 2024) ||
        (item.month === "January" && item.year === 2024)
    )
    ?.map((item) => item.month );
  // console.log("🏧", requiredMonths);


  if(!data){
    <h1>Loading ...</h1>
  }

  return (
    <div className="">
      <div className="d-history">
        <h1>Diagnosis History</h1>
        <div className="graph-container" style={{display:'flex'}}>
          <Line
            options={options}
            data={{
              labels: requiredMonths,
              datasets: [
                {
                  label: "systolic",
                  data: data?.map((data) => data.blood_pressure.systolic.value),
                  // backgroundColor:'aqua',
                  pointBackgroundColor: "#E66FD2",
                  color: "black",
                  fill: false,
                  borderColor: "#C26EB4",
                  tension: 0.5,
                  borderJoinStyle: "round",
                  borderCapStyle: "round",
                  // borderWidth:4,
                  borderWidth: 3,
                },
                {
                  label: "diastolic",
                  data: data?.map((data) => data.blood_pressure.diastolic.value),
                  pointBackgroundColor: "#8C6FE6",
                  color: "#8C6FE6",
                  fill: false,
                  borderColor: "#7E6CAB",
                  tension: 0.5,
                  borderJoinStyle: "round",
                  borderCapStyle: "round",
                  borderWidth: 3,
                },
              ],
            }}
          />
          <div className="">
            <div className="box">
              <div className="indicator">
                <div className="elipse-1"></div>
                <p className="systolic">Systolic</p>
              </div>
              <p className="val">160</p>
              <div className="arrow-desc">
                <img src="/src/assets/ArrowDown.svg" alt="" />
                <p>Higher than Averag</p>
              </div>
            </div>
            <div>
              <div className="indicator">
                <div className="elipse-2"></div>
                <p className="diastolic">Diastolic</p>
              </div>
              <p className="val">70</p>
              <div className="arrow-desc">
                <img src="/src/assets/ArrowDown.svg" alt="" />
                <p >Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
        {/* *******************************Cards*************************** */}
        <div className="card-container">
          <div className="d-card">
            <img src="/src/assets/respiratory rate.svg" alt="" />
            <p className="history-desc">Respiratory Rate</p>
            <h3>{respiratoryRate}</h3>
            <p>{temperature}</p>
            <p>{heartRate}</p>
          </div>
          <div className="d-card">
            <img src="/src/assets/temperature.svg" alt="" />
            <p className="history-desc">Temperature</p>
            <h3>{temperature}</h3>
            <p>{temperatureLevels}</p>
          </div>
          <div className="d-card">
            <img src="/src/assets/HeartBPM.svg" alt="" />
            <p className="history-desc">Heart Rate</p>
            <h3>{heartRate}</h3>
            <p>{heartLevels}</p>
          </div>
        </div>
      </div>
      <DiagonosticList/>
      
    </div>
  );
};

export default DiagnosisHistory;
