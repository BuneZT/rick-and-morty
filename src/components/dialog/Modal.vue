<template>
  <div class="text-center">
    <v-dialog v-model="show" persistent width="800">
      <v-card>
        <v-card-title class="headline green lighten-1">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <slot name="form" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn v-if="showCloseButton" color="green darken-1" text @click="onCancel">
            {{ closeButton }}
          </v-btn>

          <v-btn color="green darken-1" text @click="onSubmit">
            {{ submitButton }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    show: Boolean,
    showCloseButton: { type: Boolean, default: true },
    closeButton: { type: String, default: 'Anuluj' },
    submitButton: { type: String, default: 'Zapisz' }
  },

  methods: {
    onCancel() {
      this.$emit('cancel');
    },
    onSubmit() {
      this.$emit('submit');
    }
  }
};
</script>
