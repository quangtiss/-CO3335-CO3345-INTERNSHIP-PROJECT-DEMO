<template>
    <div class="container mt-5">
        <h2>Upload Report</h2>
        <form @submit.prevent="searchTeacherSubject">
            <div class="mb-3">
                <label for="subjectName" class="form-label">Subject's Name</label>
                <input type="text" class="form-control" id="subjectName" v-model="subjectName" placeholder="Enter Name"
                    required>
            </div>
            <div class="mb-3">
                <label for="teacherName" class="form-label">Teacher's Name</label>
                <input type="text" class="form-control" id="teacherName" v-model="teacherName" placeholder="Enter Name"
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
                <button type="submit" class="btn btn-primary">Search <i class="bi bi-search"></i></button>
            </div>
        </form>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Subject's ID</th>
                    <th scope="col">Teacher's ID</th>
                    <th scope="col">Note</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in listTeacherSubject" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.subject_id }}</td>
                    <td>{{ product.teacher_id }}</td>
                    <td>{{ product.note }}</td>
                    <td><button type="button" class="btn btn-primary" @click="selectRow(product)">Select</button></td>
                </tr>
            </tbody>
        </table>



        <form @submit.prevent="submitForm">
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label" for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="title" required>
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">FIle input</label>
                    <input type="file" class="form-control" id="formFile" ref="fileInput" required>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="note">Note</label>
                    <input type="text" class="form-control" id="note" v-model="note">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Import</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;
const nextYear = currentYear + 1;
const teacherName = ref('');
const subjectName = ref('');
const teacherID = ref('');
const subjectID = ref('');
const semester = ref('');
const year = ref('');

const listTeacherSubject = ref([]);

const searchTeacherSubject = async () => {

    try {
        const response = await axios.post('/search-name-id', {
            inputName: teacherName.value,
            table: 'teachers'
        })
        teacherID.value = response.data[0].id
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await axios.post('/search-name-id', {
            inputName: subjectName.value,
            table: 'subjects'
        })
        subjectID.value = response.data[0].id
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await axios.post('/search-teacher-subject', {
            subject_id: subjectID.value,
            teacher_id: teacherID.value,
            semester: semester.value,
            year: year.value
        })
        listTeacherSubject.value = response.data;
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
}
//=================================END SEARCH=========================================================
const selected = ref();
const selectRow = (product) => {
    alert('You have just selected ID: ' + product.id)
    selected.value = product
}
//==========================================BEGIN UPLOAD REPORT========================================
const title = ref('');
const note = ref('');
const fileInput = ref(null);
const path = ref('');
const importID = ref(0);

const submitForm = async () => {
    const file = fileInput.value.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const requestData = {
        year: year.value,
        semester: semester.value,
        idSub: selected.value.subject_id
    };
    formData.append('data', JSON.stringify(requestData));

    try {
        const response = await axios.post('/upload-report', formData);
        path.value = response.data.path
    } catch (error) {
        console.log(error)
    }

    const response = await axios.get('/getDataUserLogin')
    importID.value = response.data.student_id

    try {
        const reponse = await axios.post('/api/reports', {
            student_id: importID.value,
            teacher_to_subject_id: selected.value.id,
            title: title.value,
            path: path.value,
            note: note.value
        })
    } catch (error) {
        console.log(error)
    }
};
</script>

<style scoped>
.search-bar {
    margin-top: 20px;
}

/* ====================== */

/* =========================== */
</style>