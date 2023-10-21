<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view("admin.dashboard");
    }

    public function login(Request $request)
    {
        if ($request->isMethod("POST")) {
            $data = $request->all();
            // echo "<prev>"; print_r($data); die();
            $rules = [
                "email"=> "required|email|max:255",
                "password"=> "required|max:30"
                ];
                $customMessages = [
                    "email.required"=> "Email is required",
                    "email.email"=> "Valid email is required",
                    "password.required" => "Password is required"
                    ];
                $this->validate($request, $rules, $customMessages);
                
            if(Auth::guard("admin")->attempt(["email"=> $data["email"],"password"=> $data["password"]])) {
                return redirect("admin/dashboard");
            } else {
                return redirect()->back()->with("error","Invalid Login Details Provided");
            }
        }
        return view("admin.login");
    }

    public function logout(Request $request)
    {
        Auth::guard("admin")->logout();
        return redirect("admin/login");
    }
}
