import defer from "deferred";
import { Delete, Get, Post, Put } from "./IndexService";

const url = "imei";

const GetImei = () => {
  const deferred = new defer();
  const path = url;

  Get(path).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetImeiId = (id) => {
  const deferred = new defer();
  const path = `${url}/${id}`;

  Get(path).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const AddImei = (data) => {
  const deferred = new defer();
  const path = url;

  Post(path, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const UpdateImei = (data) => {
  const deferred = new defer();
  const path = url;

  Put(path, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const DeleteImei = (id) => {
  const deferred = new defer();
  const path = `${url}/${id}`;

  Delete(path).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export { GetImei, GetImeiId, AddImei, UpdateImei, DeleteImei };
