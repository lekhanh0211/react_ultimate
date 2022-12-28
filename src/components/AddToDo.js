const AddToDo = (props) => {
  //   const handleOnClick = () => {
  //     props.handleOnClickInParent();
  //   };
  //   const toDo = props.todo;
  //   const setToDo = props.settodo;
  const { handleOnClick, toDo, setToDo } = props;  //giản lược hóa object destructuring lưu ý khi truyền props từ thằng cha xuống phải đặt key và value giống nhau
  return (
    <div>
      <label>To's Do Name:</label>
      <input
        type="text"
        value={toDo}
        onChange={(event) => {
          setToDo(event.target.value);
        }}
      />
      <h3>hello to do list with : {toDo}</h3>
      <button
        type="submit"
        onClick={() => {
          handleOnClick();
        }}
      >
        Click Me!
      </button>
    </div>
  );
};
export default AddToDo;
