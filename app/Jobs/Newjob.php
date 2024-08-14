<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Illuminate\Support\Facades\Hash;
use App\Models\Teacher;
use App\Models\User;

class Newjob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private $path;
    public function __construct($path)
    {
        //
        $this->path = $path;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
        $csv = array_map('str_getcsv', file(storage_path('app/' . $this->path)));
        foreach ($csv as $row) {
            $teacher = Teacher::create([
                'last_name' => $row[0],
                'first_name' => $row[1],
                'teacher_code' => $row[2],
                'department' => $row[5],
                'faculty' => $row[6],
                'address' => $row[7],
                'phone' => $row[8],
                'note' => $row[9],
            ]);

            // Create new user instance and save to database
            $user = User::create([
                'name' => $row[10],
                'password' => Hash::make($row[4]),
                'email' => $row[3],
                'teacher_id' => $teacher->id,
                'role_id' => 3,
            ]);

        }
    }
}