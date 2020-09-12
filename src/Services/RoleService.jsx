import defer from "deferred";
import { Get, Post, Put, Delete } from "./IndexService";

const url = "role";

const GetRoleData = () => {
  const deferred = new defer();

  Get(url).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetRoleApp = (id) => {
  const deferred = new defer();

  Get(`${url}/applicant`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.resolve(response);
    }
  );

  return deferred.promise;
};

const GetRoleDataId = (id) => {
  const deferred = new defer();

  Get(`${url}/${id}`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.resolve(response);
    }
  );

  return deferred.promise;
};

const AddRole = (data) => {
  const deferred = new defer();

  Post(url, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const EditRole = (data) => {
  const deferred = new defer();

  Put(url, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const DeleteRole = (id) => {
  const deferred = new defer();

  Delete(`${url}/${id}`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export {
  GetRoleData,
  GetRoleDataId,
  GetRoleApp,
  AddRole,
  EditRole,
  DeleteRole,
};
