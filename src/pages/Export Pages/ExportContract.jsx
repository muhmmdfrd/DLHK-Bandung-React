import React, { useContext, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import dateFormat from "../../helpers/dateFormat";
import PrintContract from "../../helpers/PrintContract";
import { PersonContext } from "../../providers/PersonContext";

const ExportContract = () => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const now = new Date();
  const [id, setId] = useState("");
  const [personName, setPerson] = useState("");
  const [degree, setDegree] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [ktp, setKtp] = useState("");
  const [numberPhone, setPhone] = useState("");
  const [job, setJob] = useState("");

  const { handleDataByName, loading, name } = useContext(PersonContext);

  useEffect(() => {
    handleDataByName(getIdUri(window.location.href).replace(/%20/g, " "));
    const {
      personName,
      lastDegree,
      placeOfBirth,
      dateOfBirth,
      nik,
      phone,
      jobDesc,
      personId,
    } = name;

    setId(personId);
    setPerson(personName);
    setDegree(lastDegree);
    setPlace(placeOfBirth);
    setDate(dateOfBirth);
    setKtp(nik);
    setPhone(phone);
    setJob(jobDesc);
  }, [name, handleDataByName]);

  const getIdUri = (url) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  return loading ? (
    <p>Mohon tunggu</p>
  ) : (
    <FadeIn>
      <button
        className="btn btn-danger ml-5 mt-5 mb-5"
        onClick={() => PrintContract(window.$(".formContract")[0])}
      >
        PDF
      </button>
      <form
        className="formContract"
        style={{ maxWidth: "none", width: 750 + "px" }}
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>PEMERINTAH &nbsp;KOTA &nbsp;BANDUNG</h6>
          </div>
          <div className="col-md-12 text-center">
            <h4>
              DINAS &nbsp;LINGKUNGAN &nbsp;HIDUP &nbsp;DAN &nbsp;KEBERSIHAN
            </h4>
          </div>
          <div className="col-md-12 text-center">
            <p>
              Jl. Sadang Tengah No. 4&6, Sadang Serang - Bandung Telepon
              2514327/Fax 2514327
            </p>
          </div>
          <div className="col-md-12 text-center">
            <hr />
          </div>
          <div className="col-md-12 text-center">
            <p>
              <b>
                <u>SURAT&nbsp; PERJANJIAN&nbsp; KONTRAK &nbsp;KERJA</u>
              </b>
            </p>
            <p>
              Nomor : KP.03.01/2856.{id}-DLHK/VIII/
              {now.getFullYear()}
            </p>
          </div>
          <div className="col-md-12 text-justify ml-5">
            <p>
              Pada Hari ini {days[now.getDay()]}, {dateFormat(now)}, yang
              bertanda tangan dibawah ini :
            </p>
          </div>
          <div className="col-md-12 ml-5">
            <small className="font-weight-bold">I</small>
            <table>
              <tr>
                <td width="100px">Nama</td>
                <td width="25px">:</td>
                <td className="font-weight-bold">
                  Hj. Yatty Mulyati Feliana, ST., MT.
                </td>
              </tr>
              <tr>
                <td width="100px">NIP</td>
                <td width="25px">:</td>
                <td>19700515 199704 2 001</td>
              </tr>
              <tr>
                <td width="100px">Jabatan</td>
                <td width="25px">:</td>
                <td>Pejabat Pembuat Komitmen (PPK)</td>
              </tr>
            </table>
          </div>
          <br />
          <div className="col-md-12 ml-5">
            <p>
              Selanjutnya disebut <b>PIHAK &nbsp;KESATU</b>
            </p>
          </div>
          <br />
          <div className="col-md-12 ml-5">
            <small className="font-weight-bold">II</small>
            <table>
              <tr>
                <td width="100px">Nama</td>
                <td width="25px">:</td>
                <td className="font-weight-bold">{personName}</td>
              </tr>
              <tr>
                <td width="100px">Pendidikan</td>
                <td width="25px">:</td>
                <td>{degree}</td>
              </tr>
              <tr>
                <td width="100px">TTL</td>
                <td width="25px">:</td>
                <td>
                  {place},&nbsp;{dateFormat(date)}
                </td>
              </tr>
              <tr>
                <td width="100px">Jenis Kelamin</td>
                <td width="25px">:</td>
                <td>Laki-Laki</td>
              </tr>
              <tr>
                <td width="100px">No. KTP</td>
                <td width="25px">:</td>
                <td>{ktp}</td>
              </tr>
              <tr>
                <td width="100px">No. Telepon</td>
                <td width="25px">:</td>
                <td>{numberPhone}</td>
              </tr>
              <tr>
                <td width="100px">Jabatan</td>
                <td width="25px">:</td>
                <td>{job}</td>
              </tr>
            </table>
          </div>
          <br />
          <div className="col-md-12 ml-5">
            <p>
              Selanjutnya disebut <b>PIHAK &nbsp;KEDUA</b>
            </p>
          </div>
          <br />
          <div className="col-md-12 ml-5 text-justify">
            <p>
              Dengan ini menerangkan bahwa kedua belah pihak sepakat mengadakan
              perjanjian kontrak <br />
              kerja yang selanjutnya disebut Perjanjian dengan ketentuan dan
              syarat-syarat sebagai terlampir.
            </p>
          </div>
          <div className="col-md-12 ml-1">
            <div className="row">
              <div className="col-md-6 text-center">
                <b>PIHAK &nbsp;&nbsp;KESATU</b>
                <br />
                <br />
                <br />
                <br />
                <p className="mt-5 font-weight-bold">
                  Hj. Yatty Mulyati Feliana, ST., MT
                </p>
                <p>NIP. 19700515 199704 2 001</p>
              </div>
              <div className="col-md-6 text-center">
                <b>PIHAK &nbsp;&nbsp;KEDUA</b>
                <br />
                <br />
                <br />
                <br />
                <p className="mt-5 font-weight-bold">{personName}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FadeIn>
  );
};

export default ExportContract;
