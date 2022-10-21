export default (post_reducers = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return [...post_reducers, action.payload];
  
    default:
      return post_reducers;
  }
}