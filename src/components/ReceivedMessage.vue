<template>
  <v-container>
    <v-flex>
      <v-card max-width="300" class="received-card">
        <v-card-text class="received-card-text">
          <div>
            <b>
              <i>{{userName || "unkown"}}</i>
            </b>
          </div>
          {{message}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style>
.received-card {
  background-color: #325990 !important;
}

.received-card-text {
  color: white !important;
}
</style>

<script>
export default {
  props: ["message", "userName"],
  data() {
    return {
      cardtext: "test"
    };
  }
};
</script>