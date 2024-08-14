<template>
    <div class="container mt-5">
        <h2>Set mark</h2>
        <form @submit.prevent="searchForSetMark">
            <div class="mb-3">
                <label for="year" class="form-label">Year</label>
                <select id="year" v-model="year" class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option :value="lastYear">{{ lastYear }}</option>
                    <option :value="currentYear">{{ currentYear }}</option>
                    <option :value="nextYear">{{ nextYear }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="semester" class="form-label">Semester</label>
                <select id="semester" v-model="semester" class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option :value="1">HK1</option>
                    <option :value="2">HK2</option>
                    <option :value="3">HK3</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="subjectName" class="form-label">Subject's Name</label>
                <input type="text" class="form-control" id="subjectName" v-model="subjectName">
            </div>
            <div class="mb-3">
                <label for="studentName" class="form-label">Student's Name</label>
                <input type="studentName" class="form-control" id="studentName" v-model="studentName">
            </div>
            <div class="mb-3">
                <label for="studentCode" class="form-label">Student's Code</label>
                <input type="text" class="form-control" id="studentCode" v-model="studentCode">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Search <i class="bi bi-search"></i></button>
            </div>
        </form>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Subject's name</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Year</th>
                    <th scope="col">Student's name</th>
                    <th scope="col">Student's code</th>
                    <th scope="col">Title</th>
                    <th scope="col">Note</th>
                    <th scope="col">Mark</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in listResult" :key="index.id">
                    <th scope="row">{{ index.id }}</th>
                    <td>{{ index.subjectName }}</td>
                    <td>{{ index.semester }}</td>
                    <td>{{ index.year }}</td>
                    <td>{{ index.studentName }}</td>
                    <td>{{ index.studentCode }}</td>
                    <td>{{ index.title }}</td>
                    <td>{{ index.note }}</td>
                    <td>
                        <input type="number" v-model="index.mark" />
                    </td>
                    <td><a :href="downloadLink(index.path)">Download</a></td>
                    <td><button type="button" class="btn btn-primary" @click="setMark(index)">Set mark</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;
const nextYear = currentYear + 1;

const teacherID = ref('');

const subjectName = ref('');
const semester = ref('');
const year = ref('');
const studentName = ref('');
const studentCode = ref('');

const listResult = ref([]);

//=====================================================

(async () => {
    try {
        const response = await axios.get('/getDataUserLogin');
        teacherID.value = response.data.teacher_id;
    } catch (error) {
        console.error(error);
    }
})();

const searchForSetMark = async () => {
    try {
        const response = await axios.post('/search-set-mark', {
            teacherID: teacherID.value,
            year: year.value,
            semester: semester.value,
            subjectName: subjectName.value,
            studentName: studentName.value,
            studentCode: studentCode.value
        })
        listResult.value = response.data
    } catch (error) {
        console.log(error)
    }
}

const setMark = async (index) => {
    try {
        const response = await axios.patch('/api/reports/' + index.report_id, {
            mark: index.mark
        })
        alert("Successfully !!!")
    } catch (error) {
        console.log(error)
    }
}

const downloadLink = (path) => {
    return '/download/' + path;
}

</script>

<style scoped>
.search-bar {
    margin-top: 20px;
}

/* ====================== */

/* =========================== */
</style>