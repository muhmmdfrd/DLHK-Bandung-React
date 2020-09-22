import defer from 'deferred';
import { Login, Claim } from './IndexService';

const LoginService = (data) => {
  const deferred = new defer();

  Login(data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const UserClaim = (token) => {
  const deferred = new defer();

  Claim(token).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
}

export { LoginService, UserClaim };
