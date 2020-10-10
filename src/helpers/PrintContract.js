import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PrintContract = (form, name) => {
  getCanvas().then(function (canvas) {
    const img = canvas.toDataURL("image/png");
    const doc = new jsPDF({
      unit: "px",
      format: "a4",
    });
    doc.addImage(img, "JPEG", 20, 20);
    doc.save(`Kontrak - ${name} .pdf`);
  });

  function getCanvas() {
    return html2canvas(form, {
      imageTimeout: 2000,
      removeContainer: true,
    });
  }
};

export default PrintContract;