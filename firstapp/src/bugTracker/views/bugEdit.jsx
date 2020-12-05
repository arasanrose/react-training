import { useState } from 'react';
const BugEdit = ({ projects, addNew }) => {
  const [newBugName, setNewBugName] = useState("");
  const[projectId, setProjectId] =  useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
      <label htmlFor=""> Assoicate Projects</label>
      <select onChange={event => setProjectId(event.target.value)}>
        <option>Select Project</option>
        {projects.map(project => (
          <option  value={project.id}>{project.name}</option>
        ))}
        
      </select>
      <input type="button" value="Add New" onClick={() => addNew(newBugName,projectId)} />
    </section>
  );
};

export default BugEdit;