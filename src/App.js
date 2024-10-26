import "./App.css";
import image from "./shopping-basket.png";
import { ShoppingList } from "./ShoppingList";


function App() {
  return (
    <div className="container">
      <div className="container_item">
        <img src={image} alt="shopping basket" width="80px" />
      </div>
      <div className="container_item line">
        <h1>Shopping List</h1>
      </div>
      <ShoppingList />
    </div>
  );
}

export default App;
