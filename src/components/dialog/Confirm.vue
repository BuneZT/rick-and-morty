<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card dark color="primary">
        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ description }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn v-if="showCloseButton" text @click="onCancel">
            {{ closeButton }}
          </v-btn>

          <v-btn text @click="onSubmit">
            {{ submitButton }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @vuese
// Modal potwierdzania
// @group Dialog

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
    // @vuese
    // Zamyka okno
    onCancel() {
      this.$emit('cancel');
    },
    // @vuese
    // Potwierdzenie
    onSubmit() {
      this.$emit('submit');
    }
  }
};
</script>
