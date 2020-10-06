import React from "react";
import PrintContract from "../../helpers/PrintContract";

const ExportContract = () => {
  return (
    <>
      <button
        className="btn btn-danger ml-5 mt-5 mb-5"
        onClick={() => PrintContract(window.$(".formContract")[0])}
      >
        PDF
      </button>
      <form
        className="formContract"
        style={{ maxWidth: "none", width: 900 + "px" }}
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
            <p>Nomor : KP.03.01/2856.ID-DLHK/VIII/{new Date().getFullYear()}</p>
          </div>
          <div className="col-md-12 text-justify ml-5">
            <p>
              Pada Hari ini Selasa Tanggal Satu Bulan September Tahun Dua Ribu
              Dua Puluh (01-09-2020), yang bertanda tangan dibawah ini :
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
              Selanjutnya disebut <b>PIHAK &nbsp;KEDUA</b>
            </p>
          </div>
          <br />
          <div className="col-md-12 ml-5 text-justify">
            <p>
              Dengan ini menerangkan bahwa kedua belah pihak sepakat mengadakan
              perjanjian kontrak kerja yang selanjutnya disebut Perjanjian
              dengan ketentuan dan syarat-syarat sebagai terlampir.
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
                <p className="mt-5 font-weight-bold">
                  Hj. Yatty Mulyati Feliana, ST., MT
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExportContract;
