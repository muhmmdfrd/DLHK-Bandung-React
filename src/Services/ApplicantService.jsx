import defer from 'deferred';
import { Post } from './IndexService';

const url = 'applicant';

const AddApplicant = (data) => {
  const deferred = new defer();
  const path = `${url}/add`;

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

const LoginApplicant = (data) => {
  const deferred = new defer();
  const path = `${url}/login`;

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

export { AddApplicant, LoginApplicant };
