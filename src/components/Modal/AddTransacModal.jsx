import React, { useState, useContext } from "react";
import { ItemContext } from "../../providers/ItemContext";
import { EmployeeContext } from "../../providers/EmployeeContext";
import { GetEmployeeByName } from "../../Services/EmployeeService";

const AddTransacModal = () => {
  const textLoading = "loading...";
  const [itemName, setItemName] = useState([]);
  const [qty, setQty] = useState({});
  const [request, setRequest] = useState("");
  const [zone, setZone] = useState(textLoading);
  const [region, setRegion] = useState(textLoading);

  const { item, inputTransacOut } = useContext(ItemContext);
  const { employee } = useContext(EmployeeContext);

  const handleItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleItemQty = (event) => {
    setQty(event.target.value);
  };

  const handleRequest = (event) => {
    setRegion(textLoading);
    setZone(textLoading);
    setRequest(event.target.value);
    GetEmployeeByName(event.target.value.toLowerCase().trim()).then(
      (response) => {
        const { zone, region } = response.data.data;
        setZone(zone);
        setRegion(region);
      }
    );
  };

  const handleSubmit = () => {
    window.$("#btn-submit-modal-transac").text("loading");
    const data = {
      itemName: itemName,
      qty: qty,
      userRequest: request,
      userRecorder: window.localStorage.getItem("_uin"),
      zone: zone,
      region: region,
    };

    inputTransacOut(data);
  };

  return (
    <div
      className="modal fade"
      id="transacModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tambah Transaksi</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <form className="form">
                <div className="row">
                  <div className="col-md-12">
                    <select className="form-control" onChange={handleItemName}>
                      <option>Pilih Barang</option>
                      {item.map((value, index) => {
                        const { itemName } = value;
                        return (
                          <option key={index} value={itemName}>
                            {itemName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      onChange={handleItemQty}
                      placeholder={"Jumlah Barang"}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      value={request}
                      onChange={handleRequest}
                    >
                      <option>Pilih Penerima Barang</option>
                      {employee.map((value, index) => {
                        const { name } = value;
                        return (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      value={zone}
                      onChange={(event) => setZone(event.target.value)}
                      readOnly={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      value={region}
                      onChange={(event) => setRegion(event.target.value)}
                      readOnly={true}
                    />
                  </div>
                </div>
                <br />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button className="btn btn-primary">
                <span
                  id="btn-submit-modal-transac"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransacModal;
