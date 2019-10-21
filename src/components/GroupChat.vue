<template>
  <v-container id="message-container">
    <transition-group name="list">
      <div v-for="message in messages" v-bind:key="message.text">
        <div v-if="message.id == currentUserId">
          <sent-message v-bind:message="message.text" />
        </div>
        <div v-else>
          <received-message v-bind:message="message.text"  v-bind:userName="message.userName"/>
        </div>
      </div>
    </transition-group>
  </v-container>
</template>


<script>
import ReceivedMessage from "../components/ReceivedMessage";
import SentMessage from "../components/SentMessage";

export default {
  components: {
    ReceivedMessage,
    SentMessage
  },
  data() {
    return {
      messages: [],
      currentUserId: this.$cookies.get("id")
    };
  },
  methods: {},
  sockets: {
    chatmessage: function(d) {
      this.messages.push(d);
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
      }, 500)
    }
  }
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  /* margin-right: 10px; */
}
.list-enter-active,
.list-leave-active {
  transition: all 1.2s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
</style>

