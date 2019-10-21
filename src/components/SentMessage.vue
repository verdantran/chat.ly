<template>
  <v-container>
    <v-flex xs12 offset-xs8>
      <v-card max-width="300" class="mx-auto">
        <v-card-text class="sent-card-text">
          <div>
            <i>
              <b>You</b>
            </i>
          </div>
          {{message}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {};
  }
};
</script>

<style>
.sent-card-text {
  color: white !important;
}
</style>