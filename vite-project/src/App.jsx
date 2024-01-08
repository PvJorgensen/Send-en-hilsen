import { Name } from "../components/Names/Name.jsx"
import { List } from "../components/Favmeal/list.jsx"
const arrItems = [
  'Pizza', 'Boller i karry', 'Paste med kylling og pesto', 'con carne', 'Beef Wellington'
]

function App() {

  return (
    <>
    <Name Name="Frank"></Name>
    <List data={arrItems}></List>
    </>
  )
}

export default App
