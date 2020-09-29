import defer from "deferred";
import { Get, Post } from "./IndexService";

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

const AddUser = (data) => {
  const deferred = new defer();
  const path = `${url}/user`;

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

export { GetUser, AddUser };
