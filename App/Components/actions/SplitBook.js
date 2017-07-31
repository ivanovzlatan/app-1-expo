export const splitLibrary = (postContent) => {
  return {
    type: 'split_string',
    payload: postContent
  };
};
