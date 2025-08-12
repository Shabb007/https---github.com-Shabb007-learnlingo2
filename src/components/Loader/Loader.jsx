import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "300px" }}
    >
      <ClipLoader
        color="#F4C550"
        size={60}
        aria-label="Loading Spinner"
      />
    </div>
  );
};
