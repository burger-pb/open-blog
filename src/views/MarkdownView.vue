<template>
  <!-- <div v-html="md.render(state.fileContent)"></div> -->
  <!-- <md-editor v-model="state.fileContent"/> -->
  <MdPreview :editorId="state.id" :modelValue="state.fileContent" style="width: 60%; margin: 0 auto;"/>
  <!-- <MdCatalog :editorId="state.id" :scrollElement="scrollElement" /> -->
</template>

<script>
import { onMounted, reactive, getCurrentInstance } from "vue";
import { MdPreview } from 'md-editor-v3';
import MarkdownIt from "markdown-it";
// import axios from "axios";
export default {
  components: {
    MdPreview,
  },
  setup() {
    const state = reactive({
      markdown: "",
      ipfsHash: 'QmNqtxiAy62NZ3rjj1sgd3xZETJpv4q2ji2fjP2YzJ2unF', // 替换为要读取的IPFS文件的哈希值
      fileContent: '',
      id: 'preview-only'
    });
    const { appContext } = getCurrentInstance();
    const proxy = appContext.config.globalProperties;
    const scrollElement = document.documentElement;
    onMounted(() => {
      // getMarkdownData();
      readIPFSFile();
    });
    // const getMarkdownData = () => {
    //   axios.get("/markdown/test.md").then((res) => {
    //     state.markdown = res.data;
    //   });
    // };
    const readIPFSFile = async () => {
      const ipfs = await proxy.$ipfs.create();
      try {
        const cid = 'QmNqtxiAy62NZ3rjj1sgd3xZETJpv4q2ji2fjP2YzJ2unF'
        let dataString = "";
        for await (const resultUnitArray of ipfs.cat(cid)) {
          // for (let i = 0; i < resultUnitArray.length; i++) {
          //   dataString += String.fromCharCode(resultUnitArray[i]);
          // }
          const decoder = new TextDecoder();
          const text = decoder.decode(resultUnitArray);
          dataString += text
        }
        state.fileContent = dataString
        console.log(state.fileContent)
        // const chunks = []
        // for await (const buf of ipfs.get(cid)) {
        //   // do something with buf
        //   // chunks.push(buf)
        //   // console.log(buf)
        //   for (let i = 0; i < buf.length; i++) {
        //     dataString += String.fromCharCode(buf[i]);
        //   }
        // }
        // console.log(dataString)
        // console.log(Buffer.concat(chunks).toString('utf-8'))
      } catch (error) {
        console.log(error)
      } finally {
        if (ipfs.isOnline()) {
          ipfs.stop();
        }
      }
    };
    return {
      state,
      md: new MarkdownIt(),
      scrollElement
    };
  },
};
</script>

<style lang='scss' scoped>
</style>
