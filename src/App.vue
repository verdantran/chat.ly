<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span class="text-uppercase">Chat</span>
        <span class="font-weight-light">.ly</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <GroupChat />
      <MessageComposer />
    </v-content>
    <UserConfirm ref="UserConfirm"></UserConfirm>
  </v-app>
</template>

<script>
import GroupChat from "./components/GroupChat";
import MessageComposer from "./components/MessageComposer";
import UserConfirm from "./components/UserConfirm";

export default {
  name: "App",
  components: {
    GroupChat,
    MessageComposer,
    UserConfirm
  },
  mounted: function() {
    if (!this.$cookies.get("userName")) {
      this.$refs.UserConfirm.open();
    }
  },
  data: () => ({
    //
  })
};
</script>