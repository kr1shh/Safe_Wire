
import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div
        className="loading-state"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff95",
          borderRadius: "30px",
          zIndex:100,
        }}
      >
        <PropagateLoader color="#FF930F"/>
      </div>
    </>
  );
}

export default Loading