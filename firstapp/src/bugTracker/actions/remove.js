import bugApi from '../services/bugApi';

export async function remove(bugToRemove) {
  const removedBug = await bugApi.remove(bugToRemove);
  const action = { type: "BUG_REMOVE", payload: removedBug };
  return action;
}