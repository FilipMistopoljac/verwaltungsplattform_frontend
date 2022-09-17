import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
    },
    mutations:{
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
        async getStudents() {
            try{
                let apiUrl = 'http://localhost:8080/api/student/get';
                let response = await this.axios.get(apiUrl);
                console.log(response);
                this.studentsList = response.data;
                console.log(this.studentsList);
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
                let response = await this.axios.get(apiUrl);
                console.log(response);
                this.trainersList = response.data;
                console.log(this.trainersList);
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
        },
    }
})