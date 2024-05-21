import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <b>My Alert</b>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Button</Button>
    </div>
  );
}

export default App;
