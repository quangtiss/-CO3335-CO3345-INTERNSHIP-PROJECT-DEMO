<template>
    <div class="container mt-5">
        <h2>Export mark</h2>
        <form @submit.prevent="searchExportMark">
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
                <label for="teacherID" class="form-label">Teacher's ID</label>
                <input type="text" class="form-control" id="teacherID" v-model="teacherID">
            </div>
            <div class="mb-3">
                <label for="teacherName" class="form-label">Teacher's name</label>
                <input type="text" class="form-control" id="teacherName" v-model="teacherName">
            </div>
            <div class="mb-3">
                <label for="subjectID" class="form-label">Subject's ID</label>
                <input type="text" class="form-control" id="subjectID" v-model="subjectID">
            </div>
            <div class="mb-3">
                <label for="subjectName" class="form-label">Subject's name</label>
                <input type="text" class="form-control" id="subjectName" v-model="subjectName">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Search <i class="bi bi-search"></i></button>
            </div>
        </form>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Teacher's ID</th>
                    <th scope="col">Teacher's name</th>
                    <th scope="col">Subject's ID</th>
                    <th scope="col">Subject's name</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in listResult" :key="index.id">
                    <th scope="row">{{ index.year }}</th>
                    <td>{{ index.semester }}</td>
                    <td>{{ index.teacherID }}</td>
                    <td>{{ index.teacherName }}</td>
                    <td>{{ index.subjectID }}</td>
                    <td>{{ index.subjectName }}</td>
                    <!-- <td><button type="button" class="btn btn-primary" @click="exportMark(index)">Export</button></td> -->
                    <td><a :href="exportMark(index)">Export</a></td>
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

const year = ref();
const semester = ref();
const teacherID = ref();
const teacherName = ref();
const subjectID = ref();
const subjectName = ref();

const listResult = ref();

const searchExportMark = async () => {
    try {
        const response = await axios.post('/search-export-mark', {
            year: year.value,
            semester: semester.value,
            teacherID: teacherID.value,
            teacherName: teacherName.value,
            subjectID: subjectID.value,
            subjectName: subjectName.value
        })
        listResult.value = response.data
    } catch (error) {
        console.log(error)
    }
}

const exportMark = (index) => {
    // try {
    //     const response = await axios.post('/export-excel-mark', {
    //         year: index.year,
    //         semester: index.semester,
    //         teacherID: index.teacherID,
    //         teacherName: index.teacherName,
    //         subjectID: index.subjectID,
    //         subjectName: index.subjectName,
    //         teacherToSubjectID: index.teacherToSubjectID
    //     })
    //     //console.log(response.data)
    // } catch (error) {
    //     console.log(error)
    // }
    console.log('/export-excel-mark/' + index.year + '/' + index.semester + '/' + index.teacherID + '/' + index.teacherName + '/' + index.subjectID + '/' + index.subjectName + '/' + index.teacherToSubjectID)
    return '/export-excel-mark/' + index.year + '/' + index.semester + '/' + index.teacherID + '/' + index.teacherName + '/' + index.subjectID + '/' + index.subjectName + '/' + index.teacherToSubjectID
}

</script>

<style></style>
