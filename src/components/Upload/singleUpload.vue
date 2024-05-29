<template>
  <div style="margin-top: 300px">
    <el-upload
      class="avatar-uploader"
      :action="ossUploadUrl"
      :data="dataObj"
      list-type="picture-card"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img width="100%" :src="fileList[0].url" alt="" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ElUpload } from 'element-plus';
import { ElDialog } from 'element-plus';
import { policy } from '@/api/oss.js';
import { ref, defineProps, defineEmits, computed } from 'vue';
const emit = defineEmits(['input']);
const props = defineProps({
  modelValue: String,
});
const dataObj = ref({
  policy: '',
  signature: '',
  key: '',
  ossAccessKeyId: '',
  dir: '',
  host: '',
});
const dialogVisible = ref(false);
const ossUploadUrl = ref('');
const timestamp = ref('');
const imageUrl = computed(() => {
  return props.modelValue;
});
const imageName = computed(() => {
  if (props.modelValue != null && props.modelValue !== '') {
    console.log('props', props.modelValue.lastIndexOf('/') + 1);
    return props.modelValue.substr(props.modelValue.lastIndexOf('/') + 1);
  } else {
    return null;
  }
});
const fileList = computed(() => {
  return [
    {
      name: imageName,
      url: imageUrl,
    },
  ];
});
const showFileList = computed({
  get() {
    return props.modelValue !== null && props.modelValue !== '' && props.modelValue !== undefined;
  },
});

const emitInput = (val) => {
  emit('input', val);
};
const handleRemove = () => {
  emitInput('');
};
const handlePreview = () => {
  console.log('放大');
  dialogVisible.value = true;
};
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    policy()
      .then((response) => {
        timestamp.value = Math.floor(100000 + Math.random() * 900000);
        dataObj.value.policy = response.data.policy;
        dataObj.value.signature = response.data.signature;
        dataObj.value.ossAccessKeyId = response.data.ossAccessKeyId;
        dataObj.value.key =
          response.data.dir + file.name.split('.')[0] + '_' + timestamp.value + '.' + file.name.split('.')[1];
        dataObj.value.dir = response.data.dir;
        dataObj.value.host = response.data.host;
        ossUploadUrl.value = response.data.host;
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        reject(false);
      });
  });
};
const handleUploadSuccess = (res, file) => {
  showFileList.value = true;
  fileList.value.pop();
  let url = dataObj.value.host + '/' + dataObj.value.key;
  fileList.value.push({ name: file.name, url: url });

  emitInput(fileList.value[0].url);
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
