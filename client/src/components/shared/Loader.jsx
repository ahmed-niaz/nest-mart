import { CircleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const Loader = () => {
  return (
    <CircleLoader
      color="#000000"
      loading={true}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
