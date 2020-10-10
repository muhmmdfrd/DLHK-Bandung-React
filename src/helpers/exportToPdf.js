import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const exportToPdf = (data, filename = "document") => {
  getCanvas().then((canvas) => {
    const today = new Date();
    const img = canvas.toDataURL("image/png");
    const doc = new jsPDF({
      unit: "px",
      format: "a4",
      orientation: "landscape",
    });

    doc.addImage(img, "JPEG", 20, 20);
    doc.save(
      `${filename}-${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}.pdf`
    );
  });

  function getCanvas() {
    return html2canvas(data, {
      imageTimeout: 2000,
      removeContainer: true,
    });
  }
};

export default exportToPdf;