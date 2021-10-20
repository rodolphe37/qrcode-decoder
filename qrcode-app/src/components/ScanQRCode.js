import { Card, CardContent, makeStyles, Grid } from "@material-ui/core";
import QrReader from "react-qr-reader";
import useQRCode from "../hooks/useQRCode";

const ScanQRCode = () => {
  const classes = useStyles();
  const { scanResultWebCam, handleScanWebCam, handleErrorWebCam } = useQRCode();

  return (
    <Card>
      <h2 className={classes.title}>Scan & decode QR Code</h2>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            {}
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: </h3>
            <h4 className={classes.textResult}>{scanResultWebCam}</h4>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a5a4a5",
    color: "#fff",
    padding: 20,
  },
  textResult: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: 400,
  },
}));

export default ScanQRCode;
