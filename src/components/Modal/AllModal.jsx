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
    </>
  );
};

export default AllModal;
