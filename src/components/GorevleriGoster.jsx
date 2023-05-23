import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    const newtasks = tasks.filter((item) => item.id != id);
    setTasks(newtasks);
    console.log(tasks);
  };

  // const statusChange = (id) => {
  //   setTasks(
  //     tasks.map((item) => {
  //       if(item.id == id) {
  //         item.bitti = !item.bitti;
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <div>
      {tasks.map(({ id, text, day, bitti }) => {
        return (
          <div
            className={bitti ? "gorev done" : "gorev"}
            // onClick={() => statusChange(id)}
            key={id}
          >
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteTask(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
