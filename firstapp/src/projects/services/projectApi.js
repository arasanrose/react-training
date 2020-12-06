import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/projects';

async function getAll(){
    const response = await axios.get(serviceEndPoint);
    return response.data;
}

async function getById(id){
    const response = await axios.get(`${serviceEndPoint}/${id}`);
    return response.data;
}

async function save(project){
    if (project.id === 0 ){
        const response = await axios.post(serviceEndPoint, project);
        return response.data;
    } else {
        const response = await axios.put(`${serviceEndPoint}/${project.id}`, project);
        return response.data;
    }
}

async function remove(project){
    const response = await axios.delete(`${serviceEndPoint}/${project.id}`);
    return response.data;
}

const projectApi = { getAll, getById, save, remove };

export default projectApi;

