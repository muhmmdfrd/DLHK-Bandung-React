import { Get, Post, Put, Delete } from './IndexService';
import defer from 'deferred';

const url = 'presence';

const GetPresenceData = () => {
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

const GetPresenceResume = () => {
  const deferred = new defer();

  Get(`${url}/resume`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPerformResume = () => {
  const deferred = new defer();

  Get(`${url}/perform`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPresenceZone = () => {
  const deferred = new defer();

  Get(`${url}/zone`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPresenceRegion = () => {
  const deferred = new defer();

  Get(`${url}/region`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPerformZone = () => {
  const deferred = new defer();

  Get(`${url}/perform/zone`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPerformRegion = () => {
  const deferred = new defer();

  Get(`${url}/perform/region`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPresenceDataId = (id) => {
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

const GetLiveZone = () => {
  const deferred = new defer();

  Get(`${url}/live/zone`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const GetPerformLiveZone = () => {
  const deferred = new defer();

  Get(`${url}/live/perform/zone`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const AddPresence = (data) => {
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

const EditPresence = (data) => {
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

const DeletePresence = (id) => {
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
  GetPresenceData,
  GetPresenceDataId,
  GetPresenceResume,
  GetPresenceZone,
  GetPresenceRegion,
  GetPerformResume,
  GetPerformZone,
  GetPerformRegion,
  GetLiveZone,
  GetPerformLiveZone,
  AddPresence,
  EditPresence,
  DeletePresence,
};
