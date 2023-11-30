import Header from "../organisms/header";
import Layout from "../templates/layout";
import Menu from "../organisms/menu";

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu/>
        <Header/>
      </Layout>
    </div>
  );
}

export default App;