import React, { useState, useEffect } from "react";
import QR from "qrcode.react";
import FadeIn from "react-fade-in";
import exportToPdf from "../helpers/exportToPdf";

const ItemQR = () => {
  const [uri, setUri] = useState("");

  const getIdUri = (url) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  useEffect(() => {
    setUri(getIdUri(window.location.href));
  }, []);

  return (
    <FadeIn>
      <div
        className="container-fluid h-100 pt-4"
        style={{
          width: 100 + "%",
          height: 100 + "%",
          postition: "relative",
        }}
      >
        <div
          className="row h-100 justify-content-center align-items-center"
          id="printarea"
        >
          <form className="formQr">
            <QR
              id="qr"
              value={uri.replace(/%20/g, " ")}
              size={290}
              level={"H"}
              includeMargin={true}
              renderAs={"canvas"}
            />
          </form>
          <button
            className="m-5 btn btn-success"
            onClick={() => (window.location.href = "/#/admin/barang")}
          >
            Kembali
          </button>
          <button
            className="m-5 btn btn-primary"
            onClick={() =>
              exportToPdf(
                window.$(".formQr")[0],
                `QR-${uri.replace(/%20/g, " ")}`
              )
            }
          >
            Print
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default ItemQR;
