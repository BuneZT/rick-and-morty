<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-card-title class="headline green lighten-1">
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ description }}
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
      type: String,
      default: 'Potwierdzenie'
    },
    description: String,
    show: Boolean,
    showCloseButton: { type: Boolean, default: true },
    closeButton: String,
    submitButton: String
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
