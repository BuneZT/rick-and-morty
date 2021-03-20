<template>
  <div id="app">
    <notification></notification>
    <router-view />

    <confirm
      v-if="confirm"
      close-button="Cancel"
      submit-button="Confirm"
      :show="showConfirm"
      :show-close-button="confirm.showCloseButton"
      :title="confirm.title"
      :description="confirm.description"
      @submit="onConfirmSubmit()"
      @cancel="onConfirmCancel"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Confirm from '@/components/dialog/Confirm';
import Notification from '@/components/layout/Notification';

export default {
  components: { Notification, Confirm },
  data() {
    return {
      showConfirm: false
    };
  },
  methods: {
    // @vuese
    // Potwierdzenie modala
    onConfirmSubmit() {
      this.confirm.onSuccess();
      this.showConfirm = false;
    },
    // @vuese
    // Zamykanie modala przy potwierdzeniu
    onConfirmCancel() {
      this.showConfirm = false;
    }
  },
  computed: {
    ...mapState({
      confirm: state => state.confirm.confirm
    })
  },
  watch: {
    confirm(to, from) {
      if (to) {
        this.showConfirm = true;
      }
    }
  }
};
</script>
