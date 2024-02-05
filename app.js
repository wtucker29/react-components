// TODO
// const App = () => <div>Some cliche salutation</div>;

// ReactDOM.render(
//   <App />,
//   document.getElementbyId(
//     'existing-dom-element-into-which-I-want-to-render-my-component'
//   )
// );

const { useState } = React;

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const style = {
    'font-weight': isDone ? 'bold' : 'normal',
  };

  return (
    // No onHover handler. Use onMouseEnter and onMouseLeave
    <li style={style} onMouseEnter={() => setIsDone(!isDone)} onMouseLeave={() => setIsDone(!isDone)}>
      {props.groceryItem}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((groceryItem) => (
      <GroceryListItem groceryItem={groceryItem} />
      ))}
  </ul>
);



const Grocery = () => (
    <GroceryList groceryItems={['Chips', 'Spicy Salsa', 'Queso', 'Napkins']} />
);

ReactDOM.render(
  <Grocery />,
  document.getElementById(
    'app'
  )
);