<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reports;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class ReportsController extends Controller
{
    public function show(Reports $report)
    {
        return $report;
    }
    //
    public function store(Request $request)
    {
        $report = Reports::create($request->all());
        return response()->json($report, 201);
    }

    public function update(Request $request, Reports $report)
    {
        $report->update($request->all());
        return response()->json($report, 202);
    }

    public function searchReport(Request $request)
    {
        $student_id = $request->input('student_id');
        $teacher_to_subject_id = $request->input('teacher_to_subject_id');

        if ($student_id) {
            $result = Reports::where('student_id', $student_id)
                ->where('teacher_to_subject_id', $teacher_to_subject_id)
                ->first();
            if (is_null($result)) {
                return response()->json(['message' => 'Not found.'], 404);
            } else
                return response()->json($result);
        } else {
            $result = Reports::where('teacher_to_subject_id', $teacher_to_subject_id)
                ->get();
            if ($result->isEmpty()) {
                return response()->json(['message' => 'Not found.'], 404);
            } else
                return response()->json($result);
        }
    }
}