import axios from 'axios';
import { Carro } from 'src/models/Carro';

class CarroService {
  serverPath = "/api/carros";

  save(Carro){
    return axios.post("http://localhost:8080" + this.serverPath,Carro)
  }

  getAllPaginated(page:number,limit:number){
    return axios.get("http://localhost:8080" + this.serverPath,{
      headers:{
        "page": page,
        "size": limit
      }
    })
  }

  delete(id){
    return axios.delete("http://localhost:8080" + this.serverPath + "/" + id)
  }

  getById(id:number){
    return axios.get<Carro>(`http://localhost:8080${this.serverPath}/${id}`)
  }

  update(id:number,Carro){
    return axios.put(`http://localhost:8080${this.serverPath}/${id}`,Carro)
  }

  search(formData: { modelo: string; fabricante: string; status: string }) {
    return axios.get<Carro[]>("http://localhost:8080/api/carros/search",{
      headers:{
        modelo: formData.modelo,
        fabricante: formData.fabricante,
        status: formData.status
      }
    })
  }
}
export default CarroService;