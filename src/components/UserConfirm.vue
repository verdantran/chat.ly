<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
  >
    <v-card>
      <v-text-field label="What's your name?" style="margin: 10px" id="messageText" v-model="userName"  @keydown.enter="submit"></v-text-field>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" text v-on:click.native="submit">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    options: {
      width: 290,
      zIndex: 200
    },
    userName: ""
  }),
  methods: {
    open(options) {
      this.dialog = true;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    submit() {
      this.$cookies.set('userName', this.userName);
      this.resolve(true);
      this.dialog = false;
    }
  }
};
</script>