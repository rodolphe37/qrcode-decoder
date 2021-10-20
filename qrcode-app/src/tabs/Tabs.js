import GenerateQRCode from "../components/GenerateQRCode";
import ScanQRCode from "../components/ScanQRCode";
import "./tabs.css";

const Tabs = () => {
  return (
    <div className="appContainer">
      <div className="tabset">
        <input type="radio" name="tabset" id="tab1" aria-controls="generate" />
        <label htmlFor="tab1">Generate</label>

        <input
          checked
          type="radio"
          name="tabset"
          id="tab2"
          aria-controls="scan"
          readOnly
        />
        <label for="tab2">Scan</label>

        <div className="tab-panels">
          <section id="generate" className="tab-panel">
            <GenerateQRCode />
          </section>
          <section id="scan" className="tab-panel">
            <ScanQRCode />
          </section>
        </div>
      </div>

      <p>
        <small>
          Created by :{" "}
          <cite>
            <a href="https://rodolphe-augusto.fr" target="new">
              Rodolphe AUGUSTO
            </a>
          </cite>
        </small>
      </p>
    </div>
  );
};

export default Tabs;
