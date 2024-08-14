<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Subjects;

class JobImportSub implements ShouldQueue
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
            $subject = Subjects::create([
                'name' => $row[0],
                'code' => $row[1],
                'note' => $row[2],
            ]);
        }
    }
}