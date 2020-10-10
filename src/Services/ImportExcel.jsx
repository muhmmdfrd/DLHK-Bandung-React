import defer from "deferred";
import { Post } from "./IndexService";

const url = "excel";

const addFile = (data) => {
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

export default addFile;
