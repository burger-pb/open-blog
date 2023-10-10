<template>
  <div>
    文件上传测试
    <el-button type="primary" @click="onHandleApiDemo">api测试demo</el-button>
    <el-upload class="upload-demo" :http-request="handleFileUpload">
      <el-button type="primary">点击上传文件</el-button>
    </el-upload>
    <el-table :data="state.fileList" border style="width: 100%">
      <el-table-column prop="url" label="文件地址" />
    </el-table>
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      fileList: [],
    });
    const router = useRouter();
    const { appContext } = getCurrentInstance();
    const proxy = appContext.config.globalProperties;
    const handleFileUpload = async (item) => {
      // 创建 ipfs 流
      const ipfs = await proxy.$ipfs.create();
      // 构建参数，这里的 file 就是 File 对象，一般是使用 UI 组件的文件上传组件获取到的 File 对象
      const param = {
        content: item.file,
      };
      console.log(item.file);
      // 上传文件到 IPFS，返回 cid，前面也提到了，这是该文件的唯一标识符
      const cid = await ipfs.add(param);
      // 拼接文件链接
      // IPFS 的文件链接为 https://ipfs.io/ipfs/{CID}
      const fileUrl =
        "https://ipfs.io/ipfs/" + cid.path + "?filename=" + item.file.name;
      // 关闭流：如果 ipfs 在线，则调用 stop() 方法停止，否则一直进行通信，消耗资源
      if (ipfs.isOnline()) {
        ipfs.stop();
      }
      // 上传完成：此时定义 fileUrl 就是该文件的链接，直接访问即可
      console.log("fileUrl", fileUrl);
      state.fileList.push({
        url: fileUrl,
      });
    };
    // 处理跳转api demo
    const onHandleApiDemo = () => {
      router.push({
        path: "/api-demo",
      });
    };
    return {
      handleFileUpload,
      state,
      onHandleApiDemo,
    };
  },
};
</script>

<style lang='scss' scoped>
</style>
