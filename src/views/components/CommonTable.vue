<template>
  <div class="row">
    <div class="col-12">
      <div class="card mt-4">
        <div class="table-responsive">
          <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
            <div class="dataTable-top">
              <div class="dataTable-search">
                <input class="dataTable-input" placeholder="Search..." type="text" />
              </div>
            </div>
            <div class="dataTable-container">
              <table id="order-list" class="table table-flush dataTable-table">
                <thead class="thead-light">
                  <tr>
                    <th v-for="(item, index) in columns" :key="index" class="text-center">
                      <a href="#">{{ item.title }}</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in dataSource" :key="index">
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <div class="form-check">
                          <input id="" class="form-check-input" type="checkbox" name="" /><label
                            for=""
                            class="custom-control-label"
                          ></label>
                        </div>
                        <p class="text-xs font-weight-bold ms-2 mb-0">{{ item.id }}</p>
                      </div>
                    </td>
                    <td class="font-weight-bold text-center">
                      <span class="my-2 text-xs">{{ item.date }}</span>
                    </td>
                    <td class="text-xs font-weight-bold">
                      <div class="d-flex align-items-center justify-content-center">
                        <button
                          :class="item.statusButton"
                          class="btn mb-0 btn-md null null btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                        >
                          <i class="fas fa-check" aria-hidden="true"></i></button
                        ><span>{{ item.status }}</span>
                      </div>
                    </td>
                    <td class="text-xs font-weight-bold">
                      <div class="d-flex align-items-center justify-content-center">
                        <div class="avatar avatar-xs me-2">
                          <img :src="item.img" alt="user image" class="null rounded-circle null" />
                        </div>
                        <span>{{ item.customer }}</span>
                      </div>
                    </td>
                    <td class="text-xs font-weight-bold text-center">
                      <span class="my-2 text-xs">{{ item.product }}</span>
                    </td>
                    <td class="text-xs font-weight-bold text-center">
                      <span class="my-2 text-xs">{{ item.revenue }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="dataTable-bottom">
              <div class="dataTable-info">Showing 1 to 10 of 12 entries</div>
              <nav class="dataTable-pagination">
                <ul class="dataTable-pagination-list">
                  <li class="active"><a href="#" data-page="1">1</a></li>
                  <li class=""><a href="#" data-page="2">2</a></li>
                  <li class="pager"><a href="#" data-page="2">›</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const columns = ref([
  {
    title: 'Id',
  },
  {
    title: 'Date',
  },
  {
    title: 'Status',
  },
  {
    title: 'Customer',
  },
  {
    title: 'Product',
  },
  {
    title: 'Revenue',
  },
]);
const dataSource = ref([
  {
    id: '#10421',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-success',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$140,20',
  },
  {
    id: '#10521',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-dark',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$340,20',
  },
  {
    id: '#10423',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-danger',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$120,20',
  },
  {
    id: '#10421',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-success',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$140,20',
  },
  {
    id: '#10521',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-dark',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$340,20',
  },
  {
    id: '#10423',
    date: '1 Nov, 10:20 AM',
    status: 'Paid',
    statusButton: 'btn-outline-danger',
    img: '',
    customer: 'Orlando Imieto',
    product: 'Nike Sport V2',
    revenue: '$120,20',
  },
]);
// const pageSize = ref(10);
// const pageNum = ref(1);
// const total = ref(20);
</script>

<style></style>
