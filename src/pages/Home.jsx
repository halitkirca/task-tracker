import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";
// import { FaTrashAlt } from "react-icons/fa";

const Home = () => {

  const [tasks, setTasks] = useState([]);


  useEffect(()=> {setTasks(Data)}, []);

  return (
    <div>
      <GorevEkle tasks={tasks} setTasks={setTasks}/>

      <GorevleriGoster  tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default Home;
