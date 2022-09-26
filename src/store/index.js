import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        studentsList: {},
        studentData: {},
        studentId: 0,
        trainersList: {},
        trainerData: {},
        trainerId: 0,
        groupsList: {},
        groupData: {},
        roomData: {},
        roomsList: {}
    },
    mutations:{
        setStudentsList(state, studentsList) {
            state.studentsList = studentsList;
        },
        setStudentData(state, studentData) {
            state.studentData = studentData;
        },
        setStudentId(state, studentId) {
            state.studentId = studentId;
        },
        setTrainersList(state, trainersList) {
            state.trainersList = trainersList;
        },
        setTrainerData(state, trainerData) {
            state.trainerData = trainerData;
        },
        setTrainerId(state, trainerId) {
            state.trainerId = trainerId;
        },
        setGroupData(state, groupData) {
            state.groupData = groupData;
        },
        setRoomData(state, roomData) {
            state.roomData = roomData;
        },
        setGroupsList(state, groupsList) {
            state.groupsList = groupsList;
        },
        setRoomsList(state, roomsList) {
            state.roomsList = roomsList;
        }
    },
    actions:{
        async postStudent(context, studentData) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/add';
                await axios.post(apiUrl, studentData);
                alert("Kursteilnehmer hinzugefügt.");
            } catch (err){
                console.log(err);
            }
        },
        async getStudents(context) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/dto/get';
                let response = await axios.get(apiUrl);
                this.studentsList = response.data;
                context.commit("setStudentsList", response.data);
            } catch (err){
                console.log(err);
            }
        },
        async getStudent(context, studentId) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/get/' + studentId;
                let response = await axios.get(apiUrl);
                context.commit("setStudentData", response.data);
            } catch (err){
                console.log(err);
            }
        },
        async editStudent(context,data) {
            console.log(data.id, data.firstName, data.lastName);
            try{
                let apiUrl = 'http://localhost:8080/api/student/put/' + data.id;
                let response = await axios.put(apiUrl, data);
                console.log(response);
            } catch (err){
                console.log(err);
            }
        },
        async deleteStudent(context, studentId) {
            if (confirm("Teilnehmer entfernen?")) {
                try{
                    let apiUrl = 'http://localhost:8080/api/student/delete/' + studentId;
                    await axios.delete(apiUrl);
                    alert("Student deleted");
                    } catch (err){
                    console.log(err);
                }
            }
        },
        async postTrainer(context, trainerData) {
            if (confirm('Trainer hinzufügen: ' + trainerData.firstName + ' ' + trainerData.lastName + '?')){
                try{
                    let apiUrl = 'http://localhost:8080/api/trainer/add';
                    await axios.post(apiUrl, trainerData);
                    console.log("trainer added - " + "First name:" + trainerData.firstName + " Last name:" + trainerData.lastName);
                    alert("Kursteilnehmer hinzugefügt.");

                } catch (err){
                    console.log(err);
                }
            }
        },
        async getTrainers(context) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/get';
                let response = await axios.get(apiUrl);
                console.log(response);
                this.trainersList = response.data;
                console.log(this.trainersList);
                context.commit("setTrainersList", response.data);
            } catch (err){
                console.log(err);
            }
        },
        async getTrainer(context, trainerId) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/get/' + trainerId;
                let response = await axios.get(apiUrl);
                context.commit("setTrainerData", response.data);
                console.log(this.trainerData);
            } catch (err){
                console.log(err);
            }
        },
        async editTrainer(context, trainerData) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/put/' + trainerData.id;
                await axios.put(apiUrl, trainerData);
            } catch (err){
                console.log(err);
            }
        },
        async deleteTrainer(context, trainerId) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/delete/' + trainerId;
                await axios.delete(apiUrl);
                // console.log("trainer deleted - " + "First name:" + this.firstName + " Last name:" + this.lastName);
            } catch (err){
                console.log(err);
            }
        },
        async getGroups(context) {
            try{
                let apiUrl = 'http://localhost:8080/api/group/get';
                let response = await axios.get(apiUrl);
                this.groupsList = response.data;
                context.commit("setGroupsList", response.data);
            } catch (err){
                console.log(err);
            }
        },
        async getGroup(context, groupId) {
            try {
                let apiUrl = 'http://localhost:8080/api/group/get/' + groupId;
                let response = await axios.get(apiUrl);
                context.commit("setGroupData", response.data);
            } catch (err) {
                console.log(err);
            }
        },
        async getRoom(context, roomId) {
            try {
                let apiUrl = 'http://localhost:8080/api/room/get/' + roomId;
                let response = await axios.get(apiUrl);
                context.commit("setRoomData", response.data);
            } catch (err) {
                console.log(err);
            }
        },
        async getRooms(context) {
            try{
                let apiUrl = 'http://localhost:8080/api/room/get';
                let response = await axios.get(apiUrl);
                this.roomsList = response.data;
                context.commit("setRoomsList", response.data);
            } catch (err){
                console.log(err);
            }
        },
        async addStudentToGroup(context, data) {
            try {
                let apiUrl = 'http://localhost:8080/api/add-student-to-group/' + data.groupId + '/' + data.studentId;
                let response = await axios.put(apiUrl);
                console.log(response);
            } catch (err) {
                console.log(err);

            }
        },
        async addTrainerToGroup(context, data) {
            console.log(data.groupId, data.trainerId);
            try {
                let apiUrl = 'http://localhost:8080/api/add-trainer-to-group/' + data.groupId + '/' + data.trainerId;
                let response = await axios.put(apiUrl);
                console.log(response);
            } catch (err) {
                console.log(err);
            }

        },
        async addRoomToGroup(context, data) {
            try {
                let apiUrl = 'http://localhost:8080/api/add-room-to-group/' + data.groupId + '/' + data.roomId;
                let response = await axios.put(apiUrl);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
    }
})