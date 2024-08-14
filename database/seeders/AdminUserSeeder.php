<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'BMVT',
            'email' => 'bmvt@hcmut.edu.vn',
            'password' => Hash::make('Bmvt@hcmut'),
            'role_id' => 1,
        ]);
    }
}
