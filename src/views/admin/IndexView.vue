<template>
  <div v-if="visible">
    <CAdminNavbar />
    <RouterView />
  </div>
</template>

<script>
import axios from "axios";
import CAdminNavbar from "@/components/admin/CAdminNavbar.vue";
import { mapActions } from "pinia";
import { useLoaderStore } from "@/stores/loader";


export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    CAdminNavbar,
  },
  methods: {
    ...mapActions(useLoaderStore, ["setLoader"]),
    async checkLogin() {
      try {
        const hextoken = document.cookie.replace(
          /(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        if (!hextoken) {
          this.$router.push("/login");
          return;
        }
        axios.defaults.headers.common["Authorization"] = hextoken;
        await axios({
          method: "post",
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/user/check`,
        });
        this.visible = true;
      } catch (error) {
        alert(error.response.data.message);
        document.cookie = "hextoken=;expired=";
        this.$router.push("/login");
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    await this.checkLogin();
    this.setLoader(false);
  },
};
</script>

<style scoped></style>
