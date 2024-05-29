import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false,
    },
    device: 'desktop',

    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    sidebarType: 'bg-white',
    isRTL: false,
    mcolor: '',
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: 'default',
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    sidebarMinimize(state) {
      let sidenav_show = document.querySelector('#app');
      if (state.isPinned) {
        sidenav_show.classList.add('g-sidenav-hidden');
        sidenav_show.classList.remove('g-sidenav-pinned');
        state.isPinned = false;
      } else {
        sidenav_show.classList.add('g-sidenav-pinned');
        sidenav_show.classList.remove('g-sidenav-hidden');
        state.isPinned = true;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
    toggleSidebarColor({ commit }, payload) {
      commit('sidebarType', payload);
    },
  },
};

export default app;
