<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">
      <caption>Liste der Räume</caption>

      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Nummer</th>
          <th scope="col">Beschreibung</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(room, i) in roomsList" :key="i">

          <td>
            {{room.namesake}}
          </td>

          <td>
            {{room.number}}
          </td>

          <td>
            {{room.description}}
          </td>



        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: "RoomTable",
  computed: {
    roomsList () {
      return this.$store.state.roomsList;
    }
  },
  methods: {
    async getRooms() {
      await this.$store.dispatch("getRooms");
      console.log(this.roomsList);
    }
  },
  mounted() {
    this.getRooms();
  }
}
</script>

<style scoped>

</style>