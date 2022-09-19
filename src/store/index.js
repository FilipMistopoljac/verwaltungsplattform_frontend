import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        studentsList: {},
        studentData: {},
    },
    mutations:{
        setStudentsList(state, studentsList) {
            state.studentsList = studentsList;
        },
        setStudentData(state, studentData) {
            state.studentData = studentData;
        }
    },
    actions:{
        async postStudent() {
            if (confirm('Teilnehmer hinzufügen: ' + this.firstName + ' ' + this.lastName + '?')){
                try{
                    let apiUrl = 'http://localhost:8080/api/student/add';
                    await axios.post(apiUrl, {
                        firstName: this.firstName,
                        lastName: this.lastName
                    });
                    console.log("student added - " + "First name:" + this.firstName + " Last name:" + this.lastName);
                    alert("Kursteilnehmer hinzugefügt.");
                    window.location.reload();

                } catch (err){
                    console.log(err)
                }
            }
        },
        async getStudents(context) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/get';
                let response = await axios.get(apiUrl);
                console.log(response);
                this.studentsList = response.data;
                console.log(this.studentsList);
                context.commit("setStudentsList", response.data);
            } catch (err){
                console.log(err)
            }
        },
        async getStudent(context, studentId) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/get/' + studentId;
                let response = await axios.get(apiUrl);
                console.log(response);
                context.commit("setStudentData", response.data);
            } catch (err){
                console.log(err)
            }
        },
        async editStudent(context,studentData) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/put/' + studentData.id;
                await axios.put(apiUrl, studentData);
                console.log(studentData.id);
                console.log(studentData.firstName);
                window.location.reload();
            } catch (err){
                console.log(err)
            }
        },
        async deleteStudent(studentId) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/delete/' + studentId;
                await axios.delete(apiUrl);
                // console.log("student deleted - " + "First name:" + this.firstName + " Last name:" + this.lastName);
                window.location.reload();
            } catch (err){
                console.log(err)
            }
        },
        async postTrainer() {
            if (confirm('Trainer hinzufügen: ' + this.firstName + ' ' + this.lastName + '?')){
                try{
                    let apiUrl = 'http://localhost:8080/api/trainer/add';
                    await axios.post(apiUrl, {
                        firstName: this.firstName,
                        lastName: this.lastName
                    });
                    console.log("trainer added - " + "First name:" + this.firstName + " Last name:" + this.lastName);
                    alert("Kursteilnehmer hinzugefügt.");
                    window.location.reload();

                } catch (err){
                    console.log(err)
                }
            }
        },
        async getTrainers() {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/get';
                let response = await axios.get(apiUrl);
                console.log(response);
                this.trainersList = response.data;
                console.log(this.trainersList) ;
            } catch (err){
                console.log(err)
            }
        },
        async getTrainer(trainerId) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/get/' + trainerId;
                let response = await axios.get(apiUrl);
                console.log(response);
                this.trainerData = response.data;
                console.log(this.trainerData);
            } catch (err){
                console.log(err)
            }
        },
        async editTrainer(trainerId) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/put/' + trainerId;
                await axios.put(apiUrl, {
                    id: trainerId,
                    firstName: this.trainerData.firstName,
                    lastName: this.trainerData.lastName
                });
                window.location.reload();
            } catch (err){
                console.log(err)
            }
        },
        async deleteTrainer(trainerId) {
            try{
                let apiUrl = 'http://localhost:8080/api/trainer/delete/' + trainerId;
                await axios.delete(apiUrl);
                // console.log("trainer deleted - " + "First name:" + this.firstName + " Last name:" + this.lastName);
                window.location.reload();
            } catch (err){
                console.log(err)
            }
        }
    }
})