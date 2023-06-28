import Pages from "./pages/Pages.tsx"
import Category from "./components/Category";
import Search from "./components/Search"
const App = () => {

  return (
    <div className="app">
      <Search />
      <Category />
      <Pages />
    </div>
  )
}

export default App
