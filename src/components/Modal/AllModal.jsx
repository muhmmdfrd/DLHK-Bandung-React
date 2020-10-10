import React from "react";
import LogoutModal from "./LogoutModal";
import ItemModal from "./ItemModal";
import ApplicantModal from "./ApplicantModal";
import EmployeeModal from "./EmployeeModal";
import ToEmployeeModal from "./ToEmployeeModal";
import ImageModal from "./ImageModal";
import InterviewModal from "./InterviewModal";
import DateContractModal from "./DateContractModal";
import AddTransacModal from "./AddTransacModal";
import RoleModal from "./RoleModal";
import PresenceDetailModal from "./PresenceDetailModal";
import ImageDetailModal from "./ImageDetailModal";
import UserModal from "./UserModal";
import ImeiModal from "./ImeiModal";
import ImportExcelModal from "./ImportExcelModal";
import ExcelEmployeeModal from "./ExcelEmployeeModal";
import ExcelItemModal from "./ExcelItemModal";

const AllModal = () => {
  return (
    <>
      <LogoutModal />
      <ItemModal />
      <ApplicantModal />
      <EmployeeModal />
      <ToEmployeeModal />
      <ImageModal />
      <InterviewModal />
      <DateContractModal />
      <AddTransacModal />
      <RoleModal />
      <PresenceDetailModal />
      <ImageDetailModal />
      <UserModal />
      <ImeiModal />
      <ImportExcelModal />
      <ExcelEmployeeModal />
      <ExcelItemModal />
    </>
  );
};

export default AllModal;
