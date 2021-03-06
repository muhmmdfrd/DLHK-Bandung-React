import defer from "deferred";
import { Delete, Get, Post, Put } from "./IndexService";

const url = "user";

const GetUser = () => {
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

const GetUserId = (id) => {
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

const AddUser = (data) => {
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

const UpdateUser = (data) => {
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

const DeleteUser = (id) => {
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

export { GetUser, GetUserId, AddUser, UpdateUser, DeleteUser };
