import mubiLogo from "/logo.svg";

const App = () => (
  <div
    className="h-screen flex justify-center items-center border-8 border-black"
  >
    <img
      src={mubiLogo}
      style={{
        width: "30vw",
        minWidth: "200px",
      }}
    />
  </div>
);

export default App;
