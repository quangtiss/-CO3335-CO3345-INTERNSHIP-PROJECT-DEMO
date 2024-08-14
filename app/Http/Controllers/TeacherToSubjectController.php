<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TeacherToSubject;

class TeacherToSubjectController extends Controller
{
    //
    public function store(Request $request)
    {
        $object = TeacherToSubject::create($request->all());
        return response()->json($object, 201);
    }



    public function search(Request $request)
    {
        $teacherId = $request->input('teacher_id');
        $subjectId = $request->input('subject_id');
        $semester = $request->input('semester');
        $year = $request->input('year');

        $result = TeacherToSubject::where('teacher_id', $teacherId)
            ->where('subject_id', $subjectId)
            ->where('semester', $semester)
            ->where('year', $year)
            ->get();

        // Check if result exists
        if ($result) {
            return response()->json($result);
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }

    }
}