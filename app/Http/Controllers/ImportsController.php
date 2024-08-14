<?php

namespace App\Http\Controllers;

use App\Models\Imports;
use Illuminate\Http\Request;

class ImportsController extends Controller
{
    //
    public function store(Request $request)
    {
        $import = Imports::create($request->all());
        return response()->json($import, 201);
    }

    public function update(Request $request, Imports $import)
    {
        $import->update($request->all());
        return response()->json($import, 202);
    }
}