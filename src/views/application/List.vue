<template>
  <div>
    <component-table
      :items="list"
      :headers="headers"
      :actions="actions"
      :sort-by="['admissionDate']"
      :sort-desc="[true]"
    />
  </div>
</template>

<script>
import ComponentTable from '@/components/Table';
import { listMixin } from '@/mixins/list';
import { DEFAULT_TABLE_ACTIONS } from '@/constants';

export default {
  components: { ComponentTable },
  mixins: [
    listMixin('application', {
      deleted: 'Usunięto',
      deleteError: 'Nie udało się usunąć',
      getError: 'Błąd podczas pobierania encji',
      added: 'Dodano',
      addError: 'Błąd podczas dodawania',
      updated: 'Zaktualizowano',
      updateError: 'Błąd przy aktualizacji'
    })
  ],

  data() {
    return {
      headers: [{ text: 'Numer ', value: 'id' }],
      actions: DEFAULT_TABLE_ACTIONS
    };
  }
};
</script>
