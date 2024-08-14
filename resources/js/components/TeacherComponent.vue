<script setup>
import axios from 'axios'
import { ref } from 'vue'

const userName = ref('');
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const teacherCode = ref('');
const department = ref('');
const faculty = ref('');
const address = ref('');
const phone = ref('');
const note = ref('');
const password = 'Bmvt@2022';
const hashedPass = ref('');
const teacherID = ref('');

const emailError = ref('');

const isValidEmail = (email) => {
    return /^[^@]+@hcmut\.edu\.vn$/.test(email);
};

const validateEmail = () => {
    if (!email.value) {
        emailError.value = 'Email is required';
    } else if (!isValidEmail(email.value)) {
        emailError.value = 'A valid email has the form: xyz@hcmut.edu.vn';
    } else {
        emailError.value = '';
    }
};

const createStudent = async () => {
    validateEmail();
    if (emailError.value) {
        return;
    }
    try {
        const response = await axios.post('/api/teachers', {
            last_name: lastName.value,
            first_name: firstName.value,
            teacher_code: teacherCode.value,
            department: department.value,
            faculty: faculty.value,
            address: address.value,
            phone: phone.value,
            note: note.value
        })
        teacherID.value = response.data.id;
    } catch (error) {
        console.log(error)
    }
    try {
        const response = await axios.post('/hash-password', { password });
        hashedPass.value = response.data.hashedPassword;
    } catch (error) {
        console.log(error)
    }
    try {
        const response = await axios.post('/api/users', {
            name: userName.value,
            email: email.value,
            password: hashedPass.value,
            role_id: 3,
            teacher_id: teacherID.value
        })
        alert("Successfully !!!")
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="container mt-5">
        <h2>Teacher Information</h2>
        <form>
            <div class="mb-3">
                <label for="userName" class="form-label">Username</label>
                <input type="text" class="form-control" id="userName" v-model="userName" placeholder="Enter Username"
                    required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter Email" required
                    @blur="validateEmail">
                <span v-if="emailError" class="error">{{ emailError }}</span>
            </div>
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
                <label for="teacherCode" class="form-label">Teacher Code</label>
                <input type="text" class="form-control" id="teacherCode" v-model="teacherCode"
                    placeholder="Enter Teacher Code" required>
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

.error {
    color: red;
    font-size: 0.8em;
}
</style>
