<template>
  <v-footer app inset class="pa-3">
    <v-spacer></v-spacer>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">&copy; {{ buildDate | moment("YYYY") }} v{{ appVersion }}</span>
      </template>

      <span>data kompilacji: {{ buildDate | moment('YYYY-MM-DD HH:mm:ss') }}</span>
    </v-tooltip>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex';

// @vuese
// Stopka
// @group MainLayout
export default {
  computed: {
    ...mapState({
      appVersion: state => state.system.packageVersion,
      buildDate: state => state.system.buildDate
    })
  }
};
</script>
