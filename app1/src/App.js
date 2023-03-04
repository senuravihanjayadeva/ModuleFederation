import React, {Suspense} from "react";
const Button = React.lazy(() => import("app2/Button"));
const Alert = React.lazy(() => import("app2/Alert"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <Button/>
        <Alert msg="Senura"/>
      </Suspense>
    </div>)
}


export default App;
