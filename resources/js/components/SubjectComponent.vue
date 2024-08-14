<script setup>
import axios from 'axios'
import { ref } from 'vue'

const name = ref('');
const code = ref('');
const note = ref('');

const createSubject = async () => {
    try {
        const response = await axios.post('/api/subjects', {
            name: name.value,
            code: code.value,
            note: note.value
        })
        alert("Successfully !!!")
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="container mt-5">
        <h2>Subject Information</h2>
        <form @submit.prevent="createSubject">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter Name" required>
            </div>
            <div class="mb-3">
                <label for="code" class="form-label">Code</label>
                <input type="text" class="form-control" id="code" v-model="code" placeholder="Enter Code" required>
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
