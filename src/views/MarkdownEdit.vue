<template>
  <div>
    <md-editor v-model="text"/>
    <el-button @click="uploadFileToIpfs">上传</el-button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const text = ref("");
    function blobToFile(blob, filename, type) {
      return new File([blob], filename, { type });
    }
    const uploadFileToIpfs = () => {
      const file = blobToFile(text.value, "file.md", "text/markdown");
      console.log(file);
      // const formData = new FormData();
      // formData.append("file", file);
      // axios.post("/api/uploadFile", formData).then((res) => {
      //   console.log(res);
      // });
    };
    return {
      text,
      uploadFileToIpfs,
    };
  },
};
</script>

  <style lang='scss' scoped>
</style>
