import  projectApi from '../services/projectApi'

export async function addNew(projectName) {
    const newProject  = {
        id: 0,
        name: projectName,
        createdAt: new Date()
    };
    const project = await projectApi.save(newProject);
    console.log(project);
    const action = {
        type: "PROJECT_ADD_NEW",
        payload: project
    };
    return action;
}

