export default (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('<hr  />');
  }
  return state;
};
