import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import ItemContainer from "./components/itemcontainer/ItemContainer";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("List");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [packedItemPer, setPackedItemPer] = useState(0);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(items));
    
    setPackedItemPer(
      Math.floor((items.filter((item) => item.packed === true).length * 100) / items.length)
    );
  }, [items]);

  const handleAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleToggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleToggleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSortItems = () => {
    setItems(items.sort((a, b) => b.packed - a.packed).slice());
  };

  const handleClearList = () => {
    setItems([]);
  };
  return (
    <>
      <Header />
      <Form onAddItems={handleAddItems} />
      <ItemContainer
        items={items}
        onToggleItem={handleToggleItem}
        onToggleDelete={handleToggleDelete}
        onSortItems={handleSortItems}
        onClearList={handleClearList}
      />
      <Footer onPackedItemPer={packedItemPer} />
    </>
  );
}

export default App;
