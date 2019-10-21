<template>
  <v-container>
    <v-bottom-navigation :value="activeBtn" app>
      <v-btn>
        <!-- <span>Group Chat</span> -->
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn>
        <!-- <span>Direct Message</span> -->
        <v-icon>mdi-message</v-icon>
      </v-btn>

      <v-btn>
        <!-- <span>Settings</span> -->
        <v-icon>mdi-settings</v-icon>
      </v-btn>

      <v-text-field
        label="Start typing..."
        class="bottom-align"
        id="messageText"
        v-model="messageText"
        v-on:keyup.enter="sendMessage"
      ></v-text-field>
      <v-btn v-on:click="sendMessage">
        <span>Send</span>
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      messageText: "",
    };
  },
  methods: {
    sendMessage: function() {
      this.$socket.emit("chatmessage", {text: this.messageText, id: this.$cookies.get("id"), userName: this.$cookies.get("userName")});
      this.messageText = "";
      
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
      }, 500);
    }
  }
};
</script>
<style>
.v-btn {
  height: 100% !important;
}
</style>