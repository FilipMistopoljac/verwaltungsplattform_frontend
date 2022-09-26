<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">
      <caption>Liste der Gruppen</caption>

      <thead class="tableHead">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Kategorie</th>
          <th scope="col">Startdatum</th>
          <th scope="col">Trainer</th>
          <th scope="col">Raum</th>
        </tr>
      </thead>

      <tbody>
      <tr v-for="(group, i) in groupsList" :key="i">

        <td>
          {{group.name}}
        </td>

        <td>
          {{group.category}}
        </td>

        <td>
          {{group.startDate}}
        </td>

        <td v-if="!toggleBool">
          <div>
            {{group.trainer}}
          </div>
        </td>
        <td v-else>
          <div class="editWindow">
            <select v-model="trainersList[i].val">
              <option v-for="(trainer, i) in trainersList" :key="i" :value="trainer.id" :selected="trainer.name">{{trainer.firstName}} {{trainer.lastName}} - {{trainer.category}}</option>
            </select>
          </div>
        </td>



        <td v-if="!toggleBool">
          {{group.room}}
        </td>
        <td v-else>
          <div class="editWindow">
            <select v-model="roomsList[i].val" >
              <option v-for="(room, i) in groupsList" :key="i" :value="room.id" :selected="room.number">{{room.number}}</option>
            </select>
          </div>
        </td>

        <td class="buttons">
          <button v-if="!toggleBool" @click="toggleEdit(group.studentId)" class="btn btn-primary">Bearbeiten</button>
          <div v-else>
            <button @click="editRoomOrTrainer(group.id, trainersList[i].val, roomsList[i].val)" class="btn btn-primary">Bearbeiten</button>
            <button @click="toggleEdit" class="btn btn-warning">Abbrechen</button>
          </div>
        </td>

      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: "GroupTable",
  data: () => ({
    selectedTrainer: "",
    toggleBool: false
  }),
  computed: {
    groupsList () {
      return this.$store.state.groupsList;
    },
    trainersList() {
      return this.$store.state.trainersList;
    },
    roomsList() {
      return this.$store.state.roomsList;
    }
  },
  methods: {
    async getGroups() {
      await this.$store.dispatch("getGroups");
    },
    async getTrainers() {
      await this.$store.dispatch('getTrainers');
    },
    async getRooms() {
      await this.$store.dispatch('getRooms');
      console.log(this.roomsList);
    },
    toggleEdit() {
      this.toggleBool = !this.toggleBool;
    },
    async editRoomOrTrainer(groupId, trainerId) {
      /*
      await this.$store.dispatch('addRoomToGroup', {
        groupId: groupId,
        roomId: roomId
      });
       */
      await this.$store.dispatch('addTrainerToGroup', {
        groupId: groupId,
        trainerId: trainerId
      });
      location.reload();
    }
  },
  mounted() {
    this.getGroups();
    this.getTrainers();
    this.getRooms();
  }
}
</script>

<style scoped>

.buttons, .tableHead {
  text-align: center;
}

</style>