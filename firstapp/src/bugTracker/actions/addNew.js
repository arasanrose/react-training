import bugApi from '../services/bugApi';

export async function addNew(bugName) {
  const newBug = {
    id: 0,
    name: bugName,
    isClosed: false,
    createdAt: new Date()
  };
  const newBug1 = await bugApi.save(newBug);
  const action = { type: "BUG_ADD_NEW", payload: newBug1 };
  return action;
}