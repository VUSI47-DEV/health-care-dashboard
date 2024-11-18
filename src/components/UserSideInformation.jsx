import { useEffect, useState } from 'react'

const UserSideInformation = () => {

    const [data,setData] = useState(null)
    
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
        .then((result) => setData(result[3]))
        .catch((error) => console.error(error));
  
    }

    fetchData()
    // console.log(data);loca
  }, [data,requestOptions]);




  if(!data){
    <h1>Loading ...</h1>
  }

  return (
    <div className='side-user-info-container'>
        <div className="pic-plus-name">
          <img width={'200px'} src={data?.profile_picture} alt="" />
          <p>{data?.name}</p>
        </div>

        <div className="user-data">
          <img src="/src/assets/BirthIcon.png" alt="" />
          <div className="data">
            <p>Data of Birth</p>
            <h6>{data?.date_of_birth}</h6>
          </div>
        </div>
        <div className="user-data">
          <img src="/src/assets/FemaleIcon.png" alt="" />
          <div className="data">
            <p>Gender</p>
            <h6>{data?.gender}</h6>
          </div>
        </div>
        <div className="user-data">
          <img src="/src/assets/PhoneIcon.png" alt="" />
          <div className="data">
            <p>Contact Info</p>
            <h6>{data?.phone_number}</h6>
          </div>
        </div>
        <div className="user-data">
          <img src="/src/assets/PhoneIcon.png" alt="" />
          <div className="data">
            <p>Emergency Contacts</p>
            <h6>{data?.emergency_contact}</h6>
          </div>
        </div>
        <div className="user-data">
          <img src="/src/assets/InsuranceIcon.png" alt="" />
          <div className="data">
            <p >Insurrance Provider</p>
            <h6>{data?.insurance_type}</h6>
          </div>
        </div>

        <div className="show-info-btn-container"><button className='show-info-btn'>Show All Information</button></div>
    </div>
  )
}

export default UserSideInformation