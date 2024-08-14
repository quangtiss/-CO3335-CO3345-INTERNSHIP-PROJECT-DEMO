<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Collection;
use App\Models\Reports;
use App\Models\TeacherToSubject;
use Maatwebsite\Excel\Events\AfterSheet;

class MarkExport implements FromCollection
{
    protected $year, $semester, $teacherID, $teacherName, $subjectID, $subjectName, $teacherToSubjectID;

    public function __construct($year, $semester, $teacherID, $teacherName, $subjectID, $subjectName, $teacherToSubjectID)
    {
        $this->year = $year;
        $this->semester = $semester;
        $this->teacherID = $teacherID;
        $this->teacherName = $teacherName;
        $this->subjectID = $subjectID;
        $this->subjectName = $subjectName;
        $this->teacherToSubjectID = $teacherToSubjectID;
    }
    public function collection()
    {
        $result = [];
        $reports = TeacherToSubject::find($this->teacherToSubjectID)->report;
        foreach ($reports as $report) {
            $student = Reports::find($report->id)->student;
            $result[] = [
                'year' => $this->year,
                'semester' => $this->semester,
                'teacherID' => $this->teacherID,
                'teacherName' => $this->teacherName,
                'subjectID' => $this->subjectID,
                'subjectName' => $this->subjectName,
                'studentID' => $student->id,
                'studendName' => $student->first_name . ' ' . $student->last_name,
                'submitOrNot' => true,
                'mark' => $report->mark
            ];
        }
        return new Collection($result);
    }

    public function headings(): array
    {
        return [
            'Year',
            'Semester',
            'TeacherId',
            'TeacherName',
            'SubjectId',
            'SubjectName',
            'StudentId',
            'StudentName',
            'SubmitOrNot',
            'Mark'
        ];
    }

    public function getHeaders(): array
    {
        return [
            'Content-Type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename=mark_export.csv',
        ];
    }
}