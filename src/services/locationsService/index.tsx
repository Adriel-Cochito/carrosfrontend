import axios from 'axios';
import DefaultService from '../DefaultService';
class LocationService implements DefaultService {
    getAll() {
      return axios.get("http://localhost:8080/api/locations")
    }

}
export default LocationService;
