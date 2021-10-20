import {
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import useQRCode from "../hooks/useQRCode";

const GenerateQRCode = () => {
  const classes = useStyles();
  const { setText, generateQrCode, imageUrl } = useQRCode();
  return (
    <Card>
      <h2 className={classes.title}>Generate & Download</h2>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <TextField
              label="Enter Text Here"
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              className={classes.btn}
              variant="contained"
              onClick={() => generateQrCode()}
            >
              Generate
            </Button>
            <div className="term-content"></div>
            <br />
            <br />
            <br />
            {imageUrl ? (
              <a href={imageUrl} download="qrcode.png">
                <img src={imageUrl} alt="img" />
              </a>
            ) : null}
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
  btn: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#550487 !important",
    color: "#fff",
  },
}));

export default GenerateQRCode;
