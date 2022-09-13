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
        async getFunction(table) {
            try{
                let apiUrl = 'http://localhost:8080/api/{table}/get';
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
        async editStudent(studentId) {
            try{
                let apiUrl = 'http://localhost:8080/api/student/put/' + studentId;
                await axios.put(apiUrl, {
                    firstName: this.firstName,
                    lastName: this.lastName
                });
                window.location.reload();
            } catch (err){
                console.log(err)
            }
            console.log(studentId);
        }
    }
})