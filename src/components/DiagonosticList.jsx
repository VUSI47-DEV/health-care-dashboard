import { useEffect, useState } from "react";
import downloadIcon from "../assets/download_FILL0_wght300_GRAD0_opsz24.svg"
const DiagonosticList = () => {
  const [data, setData] = useState();
  const [labResults, setLabResults] = useState();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (Array.isArray(result) && result.length > 3) {
            setLabResults(result[3]?.lab_results);
            setData(result[3]?.diagnostic_list);
          } else {
            console.error(
              "Unexpected result format or insufficient elements in the array"
            );
          }
        })
        .catch((error) => console.error(error));
    };
    

    fetchData();
  }, [data, requestOptions]);

  return (
    <>
      <div className="diagnostic-list">
        <h1>Diagnostic List</h1>
        <div>
          <table>
            <tr>
              <th align="left">Problem/Diagnosis</th>
              <th>Descriptions</th>
              <th>status</th>
            </tr>
            {data?.map((items, index) => {
              return (
                <tr key={index} className="list-row">
                  <td>{items.name}</td>
                  <td align="center">{items.description}</td>
                  <td align="center">{items.status}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      {/* Lab Results */}
      <div className="lab-res">
        <h1>Lab Results</h1>
        <div className="">
          {labResults?.map((items, index) => {
            return (
              <div className="res" key={index}>
                <p>{items}</p>
                <img
                  src={downloadIcon}
                  className="d-icon"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DiagonosticList;
