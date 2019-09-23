export default ({ route, redirect }) => {
  console.log(route);
  if (process.client) {
    if (route.meta[0].requiresAuth) {
      const token = localStorage.getItem('test') || '';
      console.log(token);
      if (!token) {
        console.log('請先登入');
        redirect('/');
      }
    }
  }
};
