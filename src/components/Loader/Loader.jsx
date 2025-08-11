import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "300px" }}
    >
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#F4C550", "#F2C0BD", "#121417", "#F4C8BA", "#9FB7CE"]}
      />
    </div>
  );
};
