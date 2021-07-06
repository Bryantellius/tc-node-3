function TitleInput(props) {
  return (
    <div className="w-100">
      <label htmlFor="titleInput">Change the Title:</label>
      <input
        type="text"
        name="title"
        id="titleInput"
        value={props.title}
        onChange={props.handleInput}
      />
    </div>
  );
}

export default TitleInput;
