import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      // alias: '/', => same as redirect
    }, // our-domain.com/teams => ...
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    }, // our-domain.com/users => ...
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    next();
  } else {
    next();
  }
  // next(true); // true allow navigation transaction and false is oposite of this.
  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } }); // it would loop because it alway send user to t2 tag and we check it with if to engellemek loop.
  //   }
});

export default router;
