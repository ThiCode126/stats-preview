import Card from "./Components/Card";

import useWindowSize from "./utils/useWindowSize";


function App() {

  const size = useWindowSize();


  return (
    <>
      <Card device={size.device} />
    </>
  );
}

export default App;
