function ListGroup() {
  const items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];

  // go to getbootstrap.com -> docs -> list group
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
