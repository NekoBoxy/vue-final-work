<template>
  <CModalOrderList :order="order" @on_update="updateOrder" ref="CModalOrderList"></CModalOrderList>
  <CModalOrderDelete :order="order" @on_finish="getAllOrders" ref="CModalOrderDelete"></CModalOrderDelete>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <span style="font-size: 1.5rem;">後台訂單一覽</span>
      </div>
      <div class="col-12">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>購買時間</th>
              <th>信箱</th>
              <th>購買項目</th>
              <th>應付金額</th>
              <th>是否付款</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ getDate(order.create_at) }}</td>
              <td>{{ order.user.email }}</td>
              <td>
                <div v-for="(product, key) in order.products" :key="key">
                  {{ product.product.title }} 數量： {{ product.qty }} {{ product.product.unit }}
                </div>
              </td>
              <td>{{ new Intl.NumberFormat().format(order.total) }}</td>
              <td>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="is_paid"
                    @change="handlePaidChange(order)" :checked="order.is_paid">
                  <label class="form-check-label" for="is_paid">
                    <span v-if="order.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-primary" @click="showOrder(order)">
                    檢視
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="deleteOrder(order)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CPagination :total_pages="pagination.total_pages" @on_page="getAllOrders"></CPagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";
import CPagination from '@/components/CPagination.vue';
import CModalOrderDelete from '@/components/admin/CModalOrderDelete.vue';
import CModalOrderList from '@/components/admin/CModalOrderList.vue';
import { mapActions } from "pinia";
import { useLoaderStore } from "@/stores/loader";

export default {
  data() {
    return {
      orders: [],
      order: {},
      pagination: {
        total_pages: "",
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: "",
      },
    };
  },
  components: {
    CPagination,
    CModalOrderList,
    CModalOrderDelete,
  },
  methods: {
    ...mapActions(useLoaderStore, ["setLoader"]),
    showOrder(order) {
      this.order = order;
      this.$refs.CModalOrderList.show();
    },
    deleteOrder(order) {
      this.order = order;
      this.$refs.CModalOrderDelete.show();
    },
    async handlePaidChange(newOrder) {
      this.setLoader(true);
      newOrder.is_paid = !newOrder.is_paid;
      await this.updateOrder(newOrder);
      this.setLoader(false);
    },
    async updateOrder(newOrder) {
      try {
        this.setLoader(true);
        this.order = newOrder;
        await axios({
          method: 'put',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/order/${this.order.id}`,
          data: {
            data: this.order,
          }
        });
        await this.getAllOrders();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async getAllOrders(page) {
      try {
        this.setLoader(true);
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/orders`,
          params: {
            page: page || this.pagination.current_page
          }
        });
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    getDate(date) {
      return moment.unix(date).format("YYYY/MM/DD");
    },
  },
  async mounted() {
    this.setLoader(true);
    await this.getAllOrders();
    this.setLoader(false);
  },
};
</script>

<style scoped></style>
