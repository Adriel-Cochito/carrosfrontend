import DefaultService from '../DefaultService';

class StatusService implements DefaultService {
  getAll() {
    return Promise.resolve({
      data: [
        { value: "Novo", name: "Novo" },
        { value: "Seminovo", name: "Seminovo" },
        { value: "Usado", name: "Usado" },
      ],
    });
  }
}
export default StatusService;
