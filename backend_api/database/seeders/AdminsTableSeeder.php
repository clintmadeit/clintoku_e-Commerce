<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = Hash::make("secret123");
        $adminRecords = [
            [
                "name"=> "admin2",
                "type"=> "admin",
                "email"=> "admin2@clintoku.com",
                "phone_number"=> "+2348033445566",
                "address"=> "Ibadan, Nigeria",
                "status"=> 1,
                "password"=> $password,
                "created_at"=> \Carbon\Carbon::now(),
            ],
            [
                "name"=> "admin3",
                "type"=> "admin",
                "email"=> "admin3@clintoku.com",
                "phone_number"=> "+2348033445566",
                "address"=> "Ibadan, Nigeria",
                "status"=> 1,
                "password"=> $password,
                "created_at"=> \Carbon\Carbon::now(),
            ],
            [
                "name"=> "admin4",
                "type"=> "admin",
                "email"=> "admin4@clintoku.com",
                "phone_number"=> "+2348033445566",
                "address"=> "Ibadan, Nigeria",
                "status"=> 1,
                "password"=> $password,
                "created_at"=> \Carbon\Carbon::now(),
            ],
            [
                "name"=> "admin5",
                "type"=> "admin",
                "email"=> "admin5@clintoku.com",
                "phone_number"=> "+2348033445566",
                "address"=> "Ibadan, Nigeria",
                "status"=> 1,
                "password"=> $password,
                "created_at"=> \Carbon\Carbon::now(),
            ],
        ];
        Admin::insert($adminRecords);
    }
}
