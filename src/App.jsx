import { collection, getDocs } from "firebase/firestore/lite";
import Appbar from "./components/Appbar";
import Index from "./components/Video";
import db from "./data-base";
import { useEffect, useState } from "react";

async function getCities(db) {
  const citiesCol = collection(db, "data");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
const App = () => {
  const [data,setData]=useState([])
  useEffect(()=>{

    getCities(db).then((data) => {
      setData(data)
    });
  },[]);


  return (
    <div className="w-[90%] mx-auto">
      <Appbar />
      <Index data={data}/>
    </div>
  );
};

export default App;
