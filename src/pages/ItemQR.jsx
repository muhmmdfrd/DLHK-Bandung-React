import React, { useState, useEffect } from 'react';
import QR from 'qrcode.react';

const ItemQR = () => {
    const [uri, setUri] = useState("");

    const getIdUri = (url) => {
        return url.substring(url.lastIndexOf("/") + 1);
    };

    const handlePrint = () => {
        // var printContents = window.$('#printarea').val();
        // var originalContents = document.body.innerHTML;

        // document.body.innerHTML = printContents;

        window.print();

        // document.body.innerHTML = originalContents;
    }

    useEffect(() => {
        setUri(getIdUri(window.location.href));
    }, [])

    return (
        <div
            className="container-fluid h-100 pt-4"
            style={{
                width: 100 + "%",
                height: 100 + "%",
                postition: "relative"
            }}
        >
            <div className="row h-100 justify-content-center align-items-center" id="printarea">
                <QR
                    id="qr"
                    value={uri.replace(/%20/g, " ")}
                    size={290}
                    level={"H"}
                    includeMargin={true}
                    renderAs={"canvas"}
                />
                <button className="m-5 btn btn-primary" onClick={() => handlePrint()}>Print</button>
                <button className="m-5 btn btn-success" onClick={() => window.location.href = "/#/admin/barang"}>Kembali</button>
            </div>
        </div>
    );
}

export default ItemQR;