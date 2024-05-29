<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <singleUpload v-model="pictureList" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import singleUpload from '@/components/Upload/singleUpload.vue';
const pictureList = ref(
  'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
);
</script>
