<template>
    <div class="container mt-5">
        <form @submit.prevent="submitImage" enctype="multipart/form-data">
            <div class="form-group">
                <input type="file" class="form-control" name="image" id="image" ref="image" required>
            </div>
            <div class="mt-3"><button type="submit" class="btn btn-primary">Upload</button></div>
        </form>
        <div v-if="successMessage" class="alert alert-success mt-3">
            {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const image = ref();
const successMessage = ref();
const errorMessage = ref();

const submitImage = async () => {
    const file = image.value.files[0];
    const formData = new FormData();

    formData.append('file', file);
    try {
        const response = await axios.post('/set-image', formData);
        successMessage.value = 'Successfully !!!';
        errorMessage.value = ''
        await axios.patch('/api/users/' + response.data.id, {
            profile_image_url: response.data.url
        })
    } catch (error) {
        if (error.response) {
            errorMessage.value = error.response.data.message; // Hiển thị thông báo lỗi từ server
        } else {
            errorMessage.value = 'Error !!!'; // Xử lý các trường hợp lỗi khác
        }
        successMessage.value = '';
    }

};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin-top: 50px;
}
</style>
