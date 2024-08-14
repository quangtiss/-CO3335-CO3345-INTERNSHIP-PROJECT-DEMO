<script setup>
import axios from 'axios'
import { ref } from 'vue'

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;
const nextYear = currentYear + 1;

const teacherCode = ref('');
const subjectCode = ref('');
const semester = ref('');
const year = ref('');
const note = ref('');

const createRegisterTeach = async () => {
    try {
        const response = await axios.post('/api/teacher_to_subjects', {
            teacher_id: teacherCode.value,
            subject_id: subjectCode.value,
            semester: semester.value,
            year: year.value,
            note: note.value,
        })
        alert("Successfully !!!")
    } catch (error) {
        alert("In the field you entered the wrong data or the codes you provided do not exist")
        console.log(error);
    }
}
</script>

<template>
    <div class="container mt-5">
        <h2>Register to teach</h2>
        <form @submit.prevent="createRegisterTeach">
            <div class="mb-3">
                <label for="teacherCode" class="form-label">Lecturer's Code</label>
                <input type="text" class="form-control" id="teacherCode" v-model="teacherCode" placeholder="Enter Code"
                    required>
            </div>
            <div class="mb-3">
                <label for="subjectCode" class="form-label">Subject's Code</label>
                <input type="text" class="form-control" id="subjectCode" v-model="subjectCode" placeholder="Enter Code"
                    required>
            </div>
            <div class="mb-3">
                <label for="semester" class="form-label">Semester</label>
                <select id="semester" v-model="semester" class="form-select" aria-label="Default select example"
                    required>
                    <option selected></option>
                    <option :value="1">HK1</option>
                    <option :value="2">HK2</option>
                    <option :value="3">HK3</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="year" class="form-label">Year</label>
                <select id="year" v-model="year" class="form-select" aria-label="Default select example" required>
                    <option selected></option>
                    <option :value="lastYear">{{ lastYear }}</option>
                    <option :value="currentYear">{{ currentYear }}</option>
                    <option :value="nextYear">{{ nextYear }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <input type="text" class="form-control" id="note" v-model="note" placeholder="Enter Note">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
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
