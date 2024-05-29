<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item my-1" v-for="(item, index) in menuList" :key="index">
        <div v-if="!item.routeList">
          <sidenav-item
            :to="item.to"
            :class="getRoute() === item.route ? 'active' : ''"
            class="nav-link d-flex align-items-center rounded-pill"
            :navText="isRTL ? item.rtlName : item.name"
          >
            <template v-slot:icon>
              <i :class="item.icon"></i>
            </template>
          </sidenav-item>
        </div>

        <a
          v-else
          class="nav-link d-flex align-items-center rounded-pill"
          :class="{ active: item.id === activeItemId }"
          :href="item.href"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="true"
          @click="setActive(item.id)"
          :aria-controls="item.id"
          ><i class="ni ni-tv-2 text-primary text-sm opacity-10"></i> <span>{{ item.name }}</span>
          <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span
        ></a>
        <div class="collapse show" :id="item.id">
          <ul class="nav nav-sm flex-column mt-1">
            <li class="nav-item" v-for="(it, idx) in item.routeList" :key="idx">
              <sidenav-item
                :to="it.to"
                :class="getRoute() === it.route ? 'active' : ''"
                :navText="isRTL ? it.rtlName : it.name"
              >
                <template v-slot:icon>
                  <i :class="it.icon"></i>
                </template>
              </sidenav-item>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :card="{
        title: 'Need Help?',
        description: 'Please check our docs',
        links: [
          {
            label: 'Documentation',
            route: 'https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/',
            color: 'dark',
          },
          {
            label: 'Buy now',
            route: 'https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=vadp',
            color: 'success',
          },
        ],
      }"
    />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import SidenavItem from './SidenavItem.vue';
import SidenavCard from './SidenavCard.vue';

const store = useStore();
const isRTL = computed(() => store.state.app.isRTL);
const activeItemId = ref('');
const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split('/');
  return routeArr[1];
};
const setActive = (id) => {
  activeItemId.value = id;
};

const menuList = ref([
  {
    id: 'Dashboard',
    name: '首页',
    rtlName: 'لوحة القيادة',
    route: 'dashboard-default',
    to: '/dashboard-default',
    icon: 'ni ni-tv-2 text-primary text-sm opacity-10',
  },
  {
    id: 'sidebar-pages',
    name: '列表',
    href: '#sidebar-pages',
    routeList: [
      {
        name: 'UploadFile',
        rtlName: 'لوحة القيادة',
        route: 'uploadFile',
        to: '/uploadFile',
        icon: 'ni ni-calendar-grid-58 text-warning text-sm opacity-10',
      },
      {
        name: 'Tables',
        rtlName: 'لوحة القيادة',
        route: 'tables',
        to: '/tables',
        icon: 'ni ni-calendar-grid-58 text-warning text-sm opacity-10',
      },
      {
        name: 'Billing',
        rtlName: 'لوحة القيادة',
        route: 'billing',
        to: '/billing',
        icon: 'ni ni-credit-card text-success text-sm opacity-10',
      },
      {
        name: 'Virtual-reality',
        rtlName: 'لوحة القيادة',
        route: 'virtual-reality',
        to: '/virtual-reality',
        icon: 'ni ni-app text-info text-sm opacity-10',
      },
    ],
  },
  {
    id: 'sidebar-account',
    name: 'Account',
    href: '#sidebar-account',
    routeList: [
      {
        name: 'RTL',
        rtlName: 'لوحة القيادة',
        route: 'rtl-page',
        to: '/rtl-page',
        icon: 'ni ni-world-2 text-danger text-sm opacity-10',
      },
      {
        name: 'Profile',
        rtlName: 'لوحة القيادة',
        route: 'profile',
        to: '/profile',
        icon: 'ni ni-single-02 text-dark text-sm opacity-1o"',
      },
      {
        name: 'Sign In',
        rtlName: 'لوحة القيادة',
        route: 'signin',
        to: '/signin',
        icon: 'ni ni-single-copy-04 text-danger text-sm opacity-10"',
      },
      {
        name: 'Sign Up',
        rtlName: 'لوحة القيادة',
        route: 'signup',
        to: '/signup',
        icon: 'ni ni-collection text-info text-sm opacity-10',
      },
    ],
  },
]);
</script>
<style scoped>
.nav-link:hover {
  background-color: #d1e7dd;
  color: #198754;
}
</style>
