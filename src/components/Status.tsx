type StatusProp = {
  status: "loading" | "success" | "error";
};
export const Status = ({ status }: StatusProp) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data Fetched Successfully...";
  } else if (status === "error") {
    message = "Error, While Fectching Data...";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
