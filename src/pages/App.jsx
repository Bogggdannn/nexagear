import { Features } from "../components/Features/Features";
import { Gear } from "../components/Gear/Gear";
import { Head } from "../components/Head/Head";
import { Powering } from "../components/Powering/Powering";
import { Precision } from "../components/Precision/Presicion";

function App() {
  return (
    <div className="App">
      <Head/>
      <Powering/>
      <Precision/>
      <Gear/>
      <Features/>
    </div>
  );
}

export default App;
