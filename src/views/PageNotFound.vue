<template>
  <v-container fill-height style="height: calc(100vh - 58px);">
    <v-layout align-center>
      <v-flex text-center>
        <h1 class="display-2 primary--text">Oj, 404</h1>

        <p>Strona, której szukasz nie istnieje</p>

        <v-btn outline color="primary" :to="`/`">Wróć na stronę główną!</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>
