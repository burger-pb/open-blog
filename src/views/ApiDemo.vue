<template>
  <div>调取接口测试</div>
  <el-table :data="state.dataList" border style="width: 100%">
    <el-table-column prop="news_id" label="文件id" />
    <el-table-column prop="news_title" label="文件标题" />
  </el-table>
</template>

<script>
import { reactive, onMounted } from "vue";
import { APIFetchGetNewsList } from "@/api/news";
export default {
  setup() {
    const state = reactive({
      dataList: [],
    });
    onMounted(() => {
      getNewsList();
    });
    const getNewsList = () => {
      const params = {
        Page: 1,
        Size: 10,
      };
      APIFetchGetNewsList(params)
        .then((res) => {
          state.dataList = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      state,
    };
  },
};
</script>

  <style lang='scss' scoped>
</style>
