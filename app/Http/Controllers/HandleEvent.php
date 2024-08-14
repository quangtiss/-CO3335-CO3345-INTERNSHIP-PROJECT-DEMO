<?php

namespace App\Http\Controllers;

use App\Exports\MarkExport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Jobs\Newjob;
use App\Jobs\JobImportStu;
use App\Jobs\JobImportSub;
use App\Models\Reports;
use App\Models\Subjects;
use App\Models\TeacherToSubject;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class HandleEvent extends Controller
{
    //
    public $user, $userFullName, $userIDTeacher, $userIDStudent, $image;

    public function setNameAndID()
    {
        $this->user = Auth::user();
        if ($this->user->role_id == 1) {
            $this->userFullName = $this->user->name;
            $this->userIDTeacher = 'Admin';
            $this->userIDStudent = '';
        } else {
            $this->userFullName = 'Unknown';
            $this->userIDTeacher = 'Uknown';
            $this->userIDStudent = '';
            if ($this->user->student_id) {
                $student = DB::table('students')->where('id', $this->user->student_id)->first(['last_name', 'first_name']);
                $this->userFullName = $student->first_name . ' ' . $student->last_name;
                $this->userIDTeacher = '';
                $this->userIDStudent = $this->user->student_id;
            } else if ($this->user->teacher_id) {
                $teacher = DB::table('teachers')->where('id', $this->user->teacher_id)->first(['last_name', 'first_name']);
                $this->userFullName = $teacher->first_name . ' ' . $teacher->last_name;
                $this->userIDTeacher = '';
                $this->userIDStudent = $this->user->teacher_id;
            }
        }
        $this->image = $this->user->profile_image_url ? $this->user->profile_image_url : "";
    }

    //==============================================================================================================

    public function showDashboard()
    {
        $this->setNameAndID();
        if ($this->user->student_id == null && $this->user->role_id == 4)
            return redirect()->route('student_information');
        return view('dashboard.index', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showFormStudent()
    {
        $this->setNameAndID();
        if ($this->user->student_id)
            return redirect()->route('dashboard');
        return view('dashboard.student_information', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showFormTeacher()
    {
        $this->setNameAndID();
        return view('dashboard.teacher_information', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showImportTeacher()
    {
        $this->setNameAndID();
        return view('dashboard.import_teacher', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showImportStudent()
    {
        $this->setNameAndID();
        return view('dashboard.import_student', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showFormSubject()
    {
        $this->setNameAndID();
        return view('dashboard.subject_information', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showImportSubject()
    {
        $this->setNameAndID();
        return view('dashboard.import_subject', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showRegisterTeach()
    {
        $this->setNameAndID();
        return view('dashboard.register_teach', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showUploadReport()
    {
        $this->setNameAndID();
        return view('dashboard.upload_report', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showSetMark()
    {
        $this->setNameAndID();
        return view('dashboard.set-mark', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showExportMark()
    {
        $this->setNameAndID();
        return view('dashboard.export_mark', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function showSetImage()
    {
        $this->setNameAndID();
        return view('dashboard.set_image', [
            'userFullName' => $this->userFullName,
            'userIDTeacher' => $this->userIDTeacher,
            'userIDStudent' => $this->userIDStudent,
            'image' => $this->image
        ]);
    }

    public function setImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        // Tùy chỉnh thông báo lỗi cho các rule
        $validator->messages()->add('file.required', 'File không được để trống');
        $validator->messages()->add('file.image', 'File phải là hình ảnh');
        $validator->messages()->add('file.mimes', 'File phải có định dạng jpeg, png, jpg, gif, svg');
        $validator->messages()->add('file.max', 'File không được lớn hơn 2048 KB');
        $validator->messages()->add('student_code.required', 'Mã sinh viên không được để trống');

        if ($validator->fails()) {
            return response()->json([
                'message' => 'File phải là hình ảnh định dạng png, jpeg, ... kích thước tối đa 2048KB',
                'errors' => $validator->errors()
            ], 422); // 422 là HTTP status code cho Unprocessable Entity
        } else {
            $file = $request->file('file');
            $extension = $file->getClientOriginalExtension();
            $timestamp = Carbon::now()->format('Ymd_His');
            $user = Auth::user();
            if ($user->role_id == 4) {
                $newFileName = "{$user->student_id}_{$timestamp}.{$extension}";
            } else if ($user->role_id == 3) {
                $newFileName = "{$user->teacher_id}_{$timestamp}.{$extension}";
            }
            $path = $file->storeAs('public/profile_image', $newFileName);
            $url = Storage::url($path);
            return response()->json(['url' => $url, 'id' => $user->id]);
        }
    }

    public function uploadFile(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $timestamp = Carbon::now()->format('Ymd_His');
            $newFileName = "{$timestamp}_{$originalName}.csv";

            // Save file to storage/app/data
            $path = $file->storeAs('data', $newFileName, 'local');

            return response()->json(['path' => $path]);
        }

        return response()->json(['error' => 'File not found.'], 404);
    }

    public function uploadReport(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $formData = $request->input('data');
            $data = json_decode($formData, true);

            // Lấy các giá trị year, semester, idSub từ dữ liệu
            $year = $data['year'];
            $semester = $data['semester'];
            $idSub = $data['idSub'];

            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $file->getClientOriginalExtension();
            $timestamp = Carbon::now()->format('Ymd_His');
            $newFileName = "{$timestamp}_{$originalName}.{$extension}";

            $path = $file->storeAs('reports/' . $year . '/' . $semester . '/' . $idSub, $newFileName, 'local');

            return response()->json(['path' => $path]);
        }

        return response()->json(['error' => 'File not found.'], 404);
    }

    public function searchNameToID(Request $request)
    {
        $table = $request->input('table');
        $name = $request->input('inputName');

        // Tách tên đầy đủ thành các phần
        $nameParts = explode(' ', $name);

        // Xác định last name là phần cuối cùng
        $lastName = array_pop($nameParts);

        // Phần còn lại là first name
        $firstName = implode(' ', $nameParts);

        if ($table == 'teachers') {
            // Bắt đầu xây dựng câu truy vấn
            $query = Teacher::query();

            // Thêm điều kiện tìm kiếm theo first name và last name
            $query->where('first_name', $firstName)
                ->where('last_name', $lastName);

            // Thực hiện truy vấn và lấy kết quả
            $results = $query->get();
        } else if ($table == 'subjects') {
            $query = Subjects::query();

            // Thêm điều kiện tìm kiếm theo first name và last name
            $query->where('name', $name);

            // Thực hiện truy vấn và lấy kết quả
            $results = $query->get();
        }

        // Kiểm tra kết quả và trả về phản hồi tương ứng
        if ($results->isEmpty()) {
            return response()->json(['message' => 'Not found.'], 404);
        } else {
            return response()->json($results);
        }
    }

    public function searchSetMark(Request $request)
    {
        $teacherID = $request->input('teacherID');
        $subject = Teacher::find($teacherID)->subjects; //Danh sách các môn học, có thể lặp
        $result = [];
        $pivot = Teacher::find($teacherID)->teacherToSubject; //Danh sách đăng ký dạy, có count bằng với subject trên
        for ($i = 0; $i < count($subject); $i++) {
            $report = TeacherToSubject::find($pivot[$i]->id)->report;
            foreach ($report as $reportIndex) {
                if ($reportIndex) {
                    $student = Reports::find($reportIndex->id)->student;
                    $result[] = [
                        'id' => $subject[$i]->id,
                        'subjectName' => $subject[$i]->name,
                        'semester' => $pivot[$i]->semester,
                        'year' => $pivot[$i]->year,
                        'studentName' => $student->first_name . ' ' . $student->last_name,
                        'studentCode' => $student->student_code,
                        'title' => $reportIndex->title,
                        'note' => $reportIndex->note,
                        'mark' => $reportIndex->mark,
                        'path' => $reportIndex->path,
                        'report_id' => $reportIndex->id
                    ];
                }
            }
        }

        // Lấy các giá trị từ request
        $filters = [
            'semester' => $request->input('semester'),
            'year' => $request->input('year'),
            'subjectName' => $request->input('subjectName'),
            'studentName' => $request->input('studentName'),
            'studentCode' => $request->input('studentCode')
        ];

        // Lọc kết quả
        $filteredResult = array_filter($result, function ($item) use ($filters) {
            foreach ($filters as $key => $value) {
                if ($value !== null && $value !== '') {
                    if (strpos(strtolower($item[$key]), strtolower($value)) === false) {
                        return false;
                    }
                }
            }
            return true;
        });

        // Trả về kết quả đã lọc
        return response()->json(array_values($filteredResult));
    }

    public function searchExportMark(Request $request)
    {
        $year = $request->input('year');
        $semester = $request->input('semester');
        $teacherID = $request->input('teacherID');
        $teacherName = $request->input('teacherName');
        $subjectID = $request->input('subjectID');
        $subjectName = $request->input('subjectName');

        $result = [];
        $teacherToSubject = TeacherToSubject::query();

        if ($year)
            $teacherToSubject->where('year', $year);
        if ($semester)
            $teacherToSubject->where('semester', $semester);
        if ($teacherID)
            $teacherToSubject->where('teacher_id', $teacherID);
        if ($subjectID)
            $teacherToSubject->where('subject_id', $subjectID);

        $teacherToSubject = $teacherToSubject->get();
        foreach ($teacherToSubject as $index) {
            $teacher = $index->teacher;
            $subject = $index->subject;

            if ($teacherName && ($teacher->first_name . ' ' . $teacher->last_name) !== $teacherName) {
                continue;
            }

            if ($subjectName && $subject->name !== $subjectName) {
                continue;
            }
            if ($teacher && $subject) {
                $result[] = [
                    'year' => $index->year,
                    'semester' => $index->semester,
                    'teacherID' => $teacher->id,
                    'teacherName' => $teacher->first_name . ' ' . $teacher->last_name,
                    'subjectID' => $subject->id,
                    'subjectName' => $subject->name,
                    'teacherToSubjectID' => $index->id,
                ];
            }
        }
        return response()->json($result);
    }

    public function exportMark($year, $semester, $teacherID, $teacherName, $subjectID, $subjectName, $teacherToSubjectID)
    {
        return Excel::download(new MarkExport($year, $semester, $teacherID, $teacherName, $subjectID, $subjectName, $teacherToSubjectID), 'Export_mark.csv', \Maatwebsite\Excel\Excel::CSV);
    }

    public function storeQueue(Request $request)
    {
        $path = $request->input('path');
        if ($request->input('type') == 'student')
            JobImportStu::dispatch($path);
        else if ($request->input('type') == 'teacher')
            Newjob::dispatch($path);
        else
            JobImportSub::dispatch($path);
    }
    public function getDataUserLogin()
    {
        $user = Auth::user();
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'student_id' => $user->student_id,
            'teacher_id' => $user->teacher_id,
        ]);
    }

    public function hashPassword(Request $request)
    {
        $password = $request->input('password');

        $hashedPassword = Hash::make($password);
        return response()->json(['hashedPassword' => $hashedPassword]);
    }
}