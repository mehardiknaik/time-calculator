import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const Livetime = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <Typography variant="h4" gutterBottom component="div">
      {dateState.toLocaleDateString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </Typography>
  );
};

export default Livetime;
