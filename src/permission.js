import router from './router';
// import store from './store';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
// import { Message } from 'element-plus';
// import { getToken } from '@/utils/auth'; // 验权

// const whiteList = ['/signin', '/signup']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  // if (getToken()) {
  //   if (to.path === '/signin') {
  //     next({ path: '/' });
  //     NProgress.done();
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next();
  //   } else {
  //     next('/signin');
  //     NProgress.done();
  //   }
  // }

  next();
});

router.afterEach(() => {
  NProgress.done();
});
