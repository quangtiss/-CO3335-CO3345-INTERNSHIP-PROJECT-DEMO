<script setup>
import axios from 'axios'
import { ref } from 'vue'

const firstName = ref('');
const lastName = ref('');
const studentCode = ref('');
const department = ref('');
const faculty = ref('');
const address = ref('');
const phone = ref('');
const note = ref('');
const userID = ref(0);

const createStudent = async () => {
    try {
        const response = await axios.post('/api/students', {
            last_name: lastName.value,
            first_name: firstName.value,
            student_code: studentCode.value,
            department: department.value,
            faculty: faculty.value,
            address: address.value,
            phone: phone.value,
            note: note.value
        })
        const studentID = response.data.id;
        updateStudentID(studentID);
    } catch (error) {
        console.log(error)
    }
}

const updateStudentID = async (studentID) => {
    const response = await axios.get('/getDataUserLogin');
    userID.value = response.data.id;
    try {
        const response = await axios.patch('/api/users/' + userID.value, {
            student_id: studentID
        })
    } catch (error) {
        console.log(error)
    }
    alert("Successfully !!!");
    window.location.href = "/dashboard";
}
</script>

<template>
    <div class="container mt-5">
        <h2>Student Information</h2>
        <form>
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" v-model="firstName"
                    placeholder="Enter First Name" required>
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Enter Last Name"
                    required>
            </div>
            <div class="mb-3">
                <label for="studentCode" class="form-label">Student Code</label>
                <input type="text" class="form-control" id="studentCode" v-model="studentCode"
                    placeholder="Enter Student Code" required>
            </div>
            <div class="mb-3">
                <label for="department" class="form-label">Department</label>
                <input type="text" class="form-control" id="department" v-model="department"
                    placeholder="Enter Department" required>
            </div>
            <div class="mb-3">
                <label for="faculty" class="form-label">Faculty</label>
                <input type="text" class="form-control" id="faculty" v-model="faculty" placeholder="Enter Faculty"
                    required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" v-model="address" placeholder="Enter Address"
                    required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Enter Phone"
                    autocomplete="tel" required>
            </div>
            <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea class="form-control" id="note" v-model="note" rows="3" placeholder="Enter Note"></textarea>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-primary" @click="createStudent">Submit</button>
            </div>
        </form>
    </div>

</template>

<style scoped>
input::placeholder,
textarea::placeholder {
    opacity: 0.4;
}
</style>
