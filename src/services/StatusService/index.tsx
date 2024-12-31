import DefaultService from '../DefaultService';

class StatusService implements DefaultService {
  getAll() {
    return Promise.resolve({
      data: [
        { value: "Novo", name: "Novo" },
        { value: "SemiNovo", name: "Semi-novo" },
        { value: "Usado", name: "Usado" },
      ],
    });
  }
}
export default StatusService;
