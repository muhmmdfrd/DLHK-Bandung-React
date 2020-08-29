import defer from 'deferred';
import { Get, Post, Put, Delete } from './IndexService';

const url = 'employee';

const GetEmployeeData = () => {
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

const GetEmployeeDataId = (id) => {
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

const AddEmployee = (data) => {
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

const EditEmployee = (data) => {
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

const EditLocationEmployee = (data) => {
  const deferred = new defer();

  Put(`${url}/mutation`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const EditContract = (data) => {
  const deferred = new defer();

  Put(`${url}/contract`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const DeleteEmployee = (id) => {
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
  GetEmployeeData,
  GetEmployeeDataId,
  AddEmployee,
  EditEmployee,
  EditLocationEmployee,
  EditContract,
  DeleteEmployee,
};
