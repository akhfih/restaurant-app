import Home from '../views/page/home';
import Favorite from '../views/page/favorite';
import Detail from '../views/page/detail';
import Search from '../views/page/search';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/search/:id': Search,
};

export default routes;
