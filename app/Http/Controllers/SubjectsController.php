<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subjects;

class SubjectsController extends Controller
{
    //
    public function store(Request $request)
    {
        $subject = Subjects::create($request->all());
        return response()->json($subject, 201);
    }
    public function update(Request $request, Subjects $subject)
    {
        $subject->update($request->all());
        return response()->json($subject, 202);
    }
}