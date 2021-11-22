import Home from '../views/page/home';
import Favorite from '../views/page/favorite';
import Detail from '../views/page/detail';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
