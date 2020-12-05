let currentBugId = 0;

export function addNew(bugName, projectId) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
    projectId : projectId
  };
  console.log(newBug);
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}