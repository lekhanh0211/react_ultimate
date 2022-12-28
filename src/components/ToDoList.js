import { useState } from "react";
import _ from "lodash";
import DisplayToDo from "./DisplayToDo";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [listToDo, setListToDo] = useState([
    {
      id: "1",
      name: "Xem youtube",
    },
    {
      id: "2",
      name: "Clean Code",
    },
    {
      id: "3",
      name: "Clean Up",
    },
    {
      id: "4",
      name: "Reading Book",
    },
  ]);
  const randomIntFromInteval = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const handleOnClick = () => {
    if (!toDo) {
      //toDo rỗng, null, undefined
      alert("To Do name is not empty~");
      return;
    }
    //let toDoId = randomIntFromInteval(5, 999999999);
    let todoItem = {
      id: randomIntFromInteval(5, 999999999), ///string template
      name: toDo,
    };
    // setListToDo([...listToDo,todoItem])

    let currentListToDo = _.clone(listToDo);
    currentListToDo.push(todoItem);
    setListToDo(currentListToDo);
    setToDo = "";
  };
  let handleDeleteToDo = (id) => {
    let currentListToDo = _.clone(listToDo);

    //currentListToDo = currentListToDo.filter(item => item.id !== id); // đi làm thường viết kiểu này
    currentListToDo = currentListToDo.filter((item) => {
      if (item.id !== id)
        //lặp quét từng phần tử trong mảng mà khác với id truyền vào  // có 3 cái todo muốn xóa nó khỏi mảng <=> loại nó khỏi mảng này
        return item;
    });
    setListToDo(currentListToDo);
  };

 
  const emp = [
    { name: "Trần Thanh Huyền", depart: "Kế toán" },
    { name: "Mai Thu Huyền", depart: "Nhân sự" },
    { name: "Phạm Thanh Huyền", depart: "Hành chính" },
    { name: "Nguyễn Duy Quang", depart: "Bảo vệ" },
  ];
  console.log(listToDo);


  return (
    <div>
      <DisplayToDo
        handleDeleteToDoInParent={handleDeleteToDo}
        employee={emp}
        name={"Le Duy Khanh"}
        age={25}
        address={"Thanh Oai - Hà Nội"}
        childData={listToDo}
      />
      <AddToDo 
      toDo = {toDo}
      setToDo= {setToDo}
      handleOnClick = {handleOnClick}/>
    </div>
  );
};
export default ToDoList;
