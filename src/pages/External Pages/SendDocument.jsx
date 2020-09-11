import React, { useState, useEffect } from "react";
import {
  UploadKTP,
  UploadSertificate,
  UploadLetter,
  UploadPhoto,
} from "../../Services/PersonService";

const SendDocument = () => {
  const [counter, setCounter] = useState(0);
  const [ktp, setKtp] = useState("");
  const [photo, setPhoto] = useState("");
  const [letter, setLetter] = useState("");
  const [sertificate, setSertificate] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [val, setVal] = useState("Kirim");
  const [personId, setPersonId] = useState(0);
  const [textLoading, setTextLoading] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("_pid") === null) {
      window.location.href = "/#/pelamar/login";
    } else if (window.localStorage.getItem("_pid") !== null) {
      setPersonId(window.localStorage.getItem("_pid"));
    }
  }, []);

  const handleNext = () => {
    let listId = ["#firstDoc", "#secondDoc", "#thirdDoc", "#fourthDoc"];

    window
      .$("#progressbarDoc li")
      .eq(window.$("fieldset").index(counter))
      .addClass("active");

    if (counter === 3) {
      window
        .$("#progressbarDoc li")
        .eq(window.$("fieldset").index(3))
        .addClass("active");
    }

    setCounter((prev) => prev + 1);
    window.$(listId[counter]).hide();
    window.$(listId[counter + 1]).fadeIn();
  };

  return (
    <div className="container-fluid">
      <form id="msform">
        <ul id="progressbarDoc">
          <li className="active">&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>

        <fieldset id="firstDoc">
          <h2 className="fs-title">Scan KTP</h2>
          <h3 className="fs-subtitle">Data Diri Pelamar DLHK</h3>
          <input
            type="file"
            accept={"image/*"}
            onChange={(event) => setKtp(event.target.files[0])}
          />
          <input
            type="button"
            className="next action-button"
            disabled={disabled}
            value={val}
            onClick={() => {
              const formData = new FormData();

              formData.append("KTP", ktp);
              formData.append("personId", personId);

              setTextLoading(true);

              UploadKTP(formData)
                .then(() => {
                  setVal("Loading...");
                  setDisabled(true);
                })
                .finally(() => {
                  setTextLoading(false);
                  setVal("Kirim");
                  setDisabled(false);
                  handleNext();
                });
            }}
          />
          <br />
          {textLoading ? "Loading..." : null}
        </fieldset>

        <fieldset id="secondDoc">
          <h2 className="fs-title">Scan Ijazah Terakhir</h2>
          <h3 className="fs-subtitle">Pelamar DLHK</h3>

          <input
            type="file"
            accept={"image/*"}
            onChange={(event) => setSertificate(event.target.files[0])}
          />
          <input
            type="button"
            className="next action-button"
            value={val}
            disabled={disabled}
            onClick={() => {
              const formData = new FormData();

              formData.append("Sertificate", sertificate);
              formData.append("personId", personId);

              setTextLoading(true);

              UploadSertificate(formData)
                .then(() => {
                  setVal("Loading...");
                  setDisabled(true);
                })
                .finally(() => {
                  setVal("Kirim");
                  setTextLoading(false);
                  setDisabled(false);
                  handleNext();
                });
            }}
          />
          <br />
          {textLoading ? "Loading..." : null}
        </fieldset>

        <fieldset id="thirdDoc">
          <h2 className="fs-title">Scan Surat Lamaran Kerja</h2>
          <h3 className="fs-subtitle">Pelamar DLHK</h3>
          <input
            type="file"
            accept={"image/*"}
            onChange={(event) => setLetter(event.target.files[0])}
          />
          <input
            type="button"
            className="next action-button"
            value={val}
            disabled={disabled}
            onClick={() => {
              const formData = new FormData();

              formData.append("Letter", letter);
              formData.append("personId", personId);

              setTextLoading(true);

              UploadLetter(formData)
                .then(() => {
                  setVal("Loading...");
                  setDisabled(true);
                })
                .finally(() => {
                  setVal("Kirim");
                  setDisabled(false);
                  handleNext();
                  setTextLoading(false);
                });
            }}
          />
          <br />
          {textLoading ? "Loading..." : null}
        </fieldset>

        <fieldset id="fourthDoc">
          <h2 className="fs-title">Scan Pass Foto</h2>
          <h3 className="fs-subtitle">Pelamar DLHK</h3>
          <input
            type="file"
            accept={"image/*"}
            onChange={(event) => setPhoto(event.target.files[0])}
          />
          <input
            type="button"
            className="next action-button"
            value={val}
            onClick={() => {
              const formData = new FormData();

              formData.append("photo", photo);
              formData.append("personId", personId);

              setTextLoading(true);

              UploadPhoto(formData)
                .then(() => {
                  setVal("Loading...");
                  setDisabled(true);
                })
                .finally(() => {
                  setVal("Kirim");
                  setTextLoading(false);
                  setDisabled(false);
                  alert(
                    "saya menyatakan bahwa data yang saya isi adalah benar dan dapat dipertanggungjawabkan"
                  );
                  alert(
                    "tunggu kabar dari kami melalui email dan nomer telepon Anda"
                  );
                  window.localStorage.clear();
                  window.location.href = "/#";
                });
            }}
          />
          <br />
          {textLoading ? "Loading..." : null}
        </fieldset>
      </form>
    </div>
  );
};

export default SendDocument;
