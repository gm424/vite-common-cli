import 'element-plus/dist/index.css';
import { ElUpload, ElIcon, ElAvatar } from 'element-plus';
import { Edit, Plus } from '@element-plus/icons-vue';

export default function (app) {
  app.use(ElIcon);
  app.use(ElAvatar);
  app.use(ElUpload);
  app.component('Edit', Edit);
  app.component('Plus', Plus);
}
