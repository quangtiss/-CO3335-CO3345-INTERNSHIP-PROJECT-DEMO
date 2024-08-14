<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Import teacher information
    </button>
    <span style="display: block; color: red;">Only accept file format like: .cvs</span>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Import teacher information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label" for="importName">Reminder name</label>
                            <input type="text" class="form-control" id="importName" v-model="importName"
                                placeholder="Enter name" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="importNote">Note</label>
                            <input type="text" class="form-control" id="importNote" v-model="importNote"
                                placeholder="Note (optional)">
                        </div>

                        <div class="mb-3">
                            <label for="formFile" class="form-label">FIle input (.CSV)</label>
                            <input type="file" class="form-control" id="formFile" ref="fileInput" accept=".csv"
                                required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Import</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const importName = ref('');
const importNote = ref('');
const fileInput = ref(null);
const status = ref('uploaded');
const path = ref('');
const createdName = ref('Admin');
const importID = ref(0);

const submitForm = async () => {
    const file = fileInput.value.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('/upload-file', formData);
        path.value = response.data.path;
        console.log('File uploaded successfully', response.data);
    } catch (error) {
        console.error('Error uploading file', error);
    }

    const response = await axios.get('/getDataUserLogin');
    createdName.value = response.data.name;

    try {
        const response = await axios.post('/api/imports', {
            name: importName.value,
            note: importNote.value,
            path: path.value,
            status: status.value,
            created_by: createdName.value
        })
        importID.value = response.data.id;
        alert("Successfully !!!");
    } catch (error) {
        console.error("Error store data to import tables", error);
    }
    status.value = 'processing'
    await axios.patch('/api/imports/' + importID.value, {
        status: status.value
    })
    try {
        const response = await axios.post('/store-queue', {
            'path': path.value,
            'type': 'teacher'
        });
        status.value = 'finished without error'
    } catch (error) {
        status.value = 'finished with error'
    }
    await axios.patch('/api/imports/' + importID.value, {
        status: status.value
    })
};
</script>

<style scoped></style>
