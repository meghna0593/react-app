import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
