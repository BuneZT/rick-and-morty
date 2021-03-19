<template>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    auto-height
  >
    <div>
      <b>{{ message.title }}</b>

      <br v-if="message.messages" />

      <div v-if="message.messages">
        <div v-for="(msg, index) in message.messages" :key="index">{{ msg }}</div>
      </div>
    </div>

    <template v-slot:action>
      <v-btn dark text fab @click="hideNotification">
        <v-badge right light color="white" :value="countMessages > 0">
          <template v-slot:badge>
            <span class="black--text">{{ countMessages }}</span>
          </template>

          <v-icon>mdi-close</v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  props: {
    x: {
      type: String,
      default: null
    },
    y: {
      type: String,
      default: 'top'
    },
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      snackbar: false
    };
  },
  methods: {
    // @vuese
    // Chowa notyfikacje
    hideNotification() {
      this.$store.dispatch('hideNotification');
    }
  },
  computed: {
    ...mapState({
      show: state => state.notification.show,
      message: state => state.notification.current.message
    }),
    ...mapGetters(['countMessages'])
  },
  watch: {
    show(val) {
      if (val) {
        this.snackbar = val;
      }
    },
    snackbar(val) {
      if (!val) {
        this.hideNotification();
      }
    }
  }
};
</script>
