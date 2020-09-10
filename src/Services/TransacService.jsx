import defer from "deferred";
import { Get, Post } from "./IndexService";

const url = "transac";

const GetTransac = () => {
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

const GetTransacIn = () => {
  const deferred = new defer();

  Get(`${url}/in`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetTransacOut = () => {
  const deferred = new defer();

  Get(`${url}/out`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const PostTransacOut = (data) => {
  const deferred = new defer();

  Post(`${url}/out`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export { GetTransac, GetTransacIn, GetTransacOut, PostTransacOut };
