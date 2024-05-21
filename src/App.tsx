import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <b>World</b>
      </Alert> */}
      <Button onClick={() => console.log("Clicked")}>Button</Button>
    </div>
  );
}

export default App;
