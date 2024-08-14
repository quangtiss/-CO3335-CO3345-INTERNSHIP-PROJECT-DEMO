// Load dependencies
import { createApp } from 'vue';
import './bootstrap';

// Import your components
import ExampleComponent from './components/ExampleComponent.vue';
import StudentComponent from './components/StudentComponent.vue';
import TeacherComponent from './components/TeacherComponent.vue';
import ImportTeacher from './components/ImportTeacher.vue';
import ImportStudent from './components/ImportStudent.vue';
import SubjectComponent from './components/SubjectComponent.vue';
import ImportSubject from './components/ImportSubject.vue';
import RegisterTeach from './components/RegisterTeach.vue';
import UploadReport from './components/UploadReport.vue'
import SetMarkComponent from './components/SetMarkComponent.vue';
import ExportMarkComponent from './components/ExportMarkComponent.vue';
import SetImageComponent from './components/SetImageComponent.vue';


// Create the Vue application instance
const app = createApp({});

// Register components globally or locally
app.component('example-component', ExampleComponent);
app.component('student-information-component', StudentComponent);
app.component('teacher-information-component', TeacherComponent);
app.component('import-teacher-component', ImportTeacher);
app.component('import-student-component', ImportStudent);
app.component('subject-information-component', SubjectComponent);
app.component('import-subject-component', ImportSubject);
app.component('register-teach-component', RegisterTeach);
app.component('upload-report-component', UploadReport);
app.component('set-mark-component', SetMarkComponent);
app.component('export-mark-component', ExportMarkComponent);
app.component('set-image-component', SetImageComponent);


// Mount the application
app.mount('#app');
