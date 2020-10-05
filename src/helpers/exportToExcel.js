import excel from "tableexport";

const exportToExcel = (id) => {
  // * config
  excel.prototype.bootstrapConfig = [
    "btn btn-success",
    "btn-default",
    "btn-toolbar",
  ];

  excel.prototype.typeConfig.date.assert = () => {
    return false;
  };

  const today = new Date();

  const result = excel(window.$(`#${id}`), {
    headers: true,
    footers: true,
    filename: `${id}-${today.getDate()}-${
      today.getMonth() + 1
    }-${today.getFullYear()}`,
    exportButtons: false,
    position: "bottom",
    trimWhitespace: true,
    RTL: false,
    sheetname: "id",
  });

  const exportData = result.getExportData();
  const xlsxData = exportData[id].xlsx;

  result.export2file(
    xlsxData.data,
    xlsxData.mimeType,
    xlsxData.filename,
    xlsxData.fileExtension,
    xlsxData.merges,
    xlsxData.RTL,
    xlsxData.sheetname
  );
};

export default exportToExcel;
