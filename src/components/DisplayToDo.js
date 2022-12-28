const DisplayToDo = (props) => {
  const handleDeleteToDofromChild = (id) => {
    props.handleDeleteToDoInParent(id);
  };
  const listToDo = props.childData;
  return (
    <div>
      <h3
        style={{
          color: "red",
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "20px",
          fontFamily: "cursive",
        }}
      >
        WELCOME TO REACT JS
      </h3>
      <h3 >====== List To Do ======</h3>
      {listToDo.map((item, index) => {
        return (
          <div key={item.id}>
            {item.name}{" "}
            <span
              onClick={() => {
                handleDeleteToDofromChild(item.id);
              }}
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayToDo;
