import { useEffect, useState } from "react";

const Patients = () => {
  const [data, setData] = useState(null);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
  
   
    const fetchData = async () =>{
     await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result[3]))
      .catch((error) => console.error(error));
    }

    fetchData();
    
  }, [data,requestOptions]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="patient-container">
      <div className="head">
        <h1>Patients</h1>
        <img
          src="/src/assets/search_FILL0_wght300_GRAD0_opsz24.png"
          alt="search-icons"
        />
      </div>

      <div className="patient">
        <div className="patient-content">
          <img src="/src/assets/Layer 8.png" alt=""/>
          <div className="patient-details">
            <p className="name">{data.name}</p>
            <p className="gender-age">{data.gender + " "+ data.age}</p>
          </div>
        </div>
        <img
          src="/src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Patients;