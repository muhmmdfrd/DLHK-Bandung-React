import defer from "deferred";
import { Get, Post, Put, Delete } from "./IndexService";

const url = "person";

const GetPersonData = () => {
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

const GetPersonDataId = (id) => {
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

const GetApplicant = () => {
  const deferred = new defer();

  Get(`${url}/applicant`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetApplicantId = (id) => {
  const deferred = new defer();

  Get(`${url}/applicant/${id}`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPersonByName = (name) => {
  const deferred = new defer();

  Get(`${url}/search/${name}`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const AddPerson = (data) => {
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

const SendEmail = (data) => {
  const deferred = new defer();

  Post(`${url}/email`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const EditPerson = (data) => {
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

const UploadKTP = (data) => {
  const deferred = new defer();

  Put(`${url}/ktp`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const UploadPhoto = (data) => {
  const deferred = new defer();

  Put(`${url}/photo`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const UploadLetter = (data) => {
  const deferred = new defer();

  Put(`${url}/letter`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const UploadSertificate = (data) => {
  const deferred = new defer();

  Put(`${url}/sertificate`, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const DeletePerson = (id) => {
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

const DeletePersonEmployee = (id) => {
  const deferred = new defer();

  Delete(`${url}/employee/${id}`).then(
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
  GetPersonData,
  GetPersonDataId,
  GetApplicant,
  GetApplicantId,
  GetPersonByName,
  AddPerson,
  SendEmail,
  EditPerson,
  UploadKTP,
  UploadPhoto,
  UploadSertificate,
  UploadLetter,
  DeletePerson,
  DeletePersonEmployee,
};
