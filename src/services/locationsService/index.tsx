import axios from 'axios';
import DefaultService from '../DefaultService';
class LocationService implements DefaultService {

  apiURL = process.env.REACT_APP_API_URL;

    getAll() {
      return axios.get(`${this.apiURL}/api/locations`)
    }

}
export default LocationService;
