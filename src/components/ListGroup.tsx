import { useState } from "react";

function ListGroup() {
  let items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // two elements in the array: variable and updater function

  // go to getbootstrap.com -> docs -> list group
  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
