import axios from 'axios';
import { Carro } from 'src/models/Carro';

class CarroService {
  serverPath = "/api/carros";

  apiURL = process.env.REACT_APP_API_URL;

  save(Carro){
    return axios.post(this.apiURL + this.serverPath,Carro)
  }

  getAllPaginated(page:number,limit:number){
    return axios.get(this.apiURL + this.serverPath,{
      headers:{
        "page": page,
        "size": limit
      }
    })
  }

  delete(id){
    return axios.delete(this.apiURL + this.serverPath + "/" + id)
  }

  getById(id:number){
    return axios.get<Carro>(`${this.apiURL}${this.serverPath}/${id}`)
  }

  update(id:number,Carro){
    return axios.put(`${this.apiURL}${this.serverPath}/${id}`,Carro)
  }

  search(formData: { modelo: string; fabricante: string; status: string }) {
    return axios.get<Carro[]>(this.apiURL+"/api/carros/search", {
      headers:{
        modelo: formData.modelo,
        fabricante: formData.fabricante,
        status: formData.status
      }
    })
  }
}
export default CarroService;