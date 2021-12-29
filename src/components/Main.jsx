import { useEffect, useState } from "react";
import styles from "../../styles/Main.module.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Livetime from "./Livetime";

const Main = () => {
  const [fdate, setfdate] = useState(null);
  const [tdate, settdate] = useState(null);
  const [dataObj, setDataObj] = useState(null);

  const Submit = () => {
    let data = {};
    data["millisecond"] = Math.abs(tdate - fdate);
    data["second"] = Math.round(data["millisecond"] / 1000);
    data["minutes"] = Math.round(data["second"] / 60);
    data["hours"] = Math.round(data["minutes"] / 60);
    data["days"] = Math.round(data["hours"] / 24);
    data["months"] = monthDiff(new Date(fdate), new Date(tdate));
    data["years"] = calculateAge(new Date(fdate), new Date(tdate));
    setDataObj(data);
    // console.log("submitted", fdate, tdate, data);
  };

  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const calculateAge=(dateFrom, dateTo) =>{ 
    var ageDifMs = dateTo - dateFrom;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const Clear = () => {
    setfdate(null);
    settdate(null);
    setDataObj(null);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>Date & Time Calculator</h1>
        <Livetime />
      </div>
      <div className={styles.dateContainer}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DatePicker
              disableFuture
              label="From Date"
              openTo="year"
              views={["year", "month", "day"]}
              value={fdate}
              onChange={(newValue) => {
                setfdate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
          <Stack spacing={3}>
            <DatePicker
              disableFuture
              label="To Date"
              openTo="year"
              views={["year", "month", "day"]}
              value={tdate}
              onChange={(newValue) => {
                settdate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              minDate={fdate}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="outlined" onClick={Clear}>
          Clear
        </Button>
        <Button
          variant="contained"
          onClick={Submit}
          disabled={!fdate || !tdate}
        >
          Calculate
        </Button>
      </div>
      {dataObj && (
        <div className={styles.dateContainer}>
          <Box sx={{ width: "100%", maxWidth: 500 }}>
          {dataObj.years != 0 && (
              <Typography variant="h6" gutterBottom component="div">
                Years: {dataObj?.years}
              </Typography>
            )}
            {dataObj.months != 0 && (
              <Typography variant="h6" gutterBottom component="div">
                Months: {dataObj?.months}
              </Typography>
            )}
            <Typography variant="h6" gutterBottom component="div">
              Days: {dataObj?.days}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Hours: {dataObj?.hours}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Minutes: {dataObj?.minutes}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Seconds: {dataObj?.second}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Milliseconds: {dataObj?.millisecond}
            </Typography>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Main;
