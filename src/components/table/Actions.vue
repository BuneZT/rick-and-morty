<template>
  <td v-if="actions && actions.length > 0" class="table-actions">
    <template v-for="(action, index) in actions">
      <v-tooltip v-if="!(action.hideFunction && action.hideFunction(object))" :key="action.event + '_' + index" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            :class="action.class"
            :color="actionColor(action)"
            :outlined="action.outlined"
            v-bind="attrs"
            v-on="on"
            @click.prevent="$emit(action.event, object)"
          >
            <v-icon>{{ action.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ action.tooltipText }}</span>
      </v-tooltip>
    </template>
  </td>
</template>

<script>
// @vuese
// Akcje tabeli
// @group Table
export default {
  name: 'TActions',
  props: {
    // Obiekt zawierający dane
    object: { type: Object, required: true },
    // Możliwe do wykonania akcje
    actions: { type: Array, required: false }
    // Typ encji wyświetlanej w tabeli
  },
  methods: {
    // @vuese
    // Zwraca kolor akcji
    actionColor(action) {
      if (typeof action.color === 'function') {
        return action.color(this.object);
      }
      return action.color;
    }
  }
};
</script>
