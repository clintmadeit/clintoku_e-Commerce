<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;

class AdminController extends Controller
{
    public function dashboard()
    {
        // echo "<pre>"; print_r(Auth::guard("admin")->user()); die();
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

    public function updatePassword(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            // Check if the current password is correct
            if (Hash::check($data["current_pwd"], Auth::guard('admin')->user()->password)) 
            {
                // Check if new password and confirm password are matching
                if ($data['new_pwd'] == $data['confirm_pwd']) {
                    // Update the new password
                    Admin::where('id', Auth::guard('admin')->user()->id)->update(['password'=> bcrypt($data['new_pwd'])]);
                    return redirect()->back()->with('success','Password has been updated successfully!');
                }else {
                    return redirect()->back()->with('error','New Password and confirm password does not match');
                }

            } else {
                return redirect()->back()->with('error', 'Your Current password is incorrect');
            }

        }
        return view("admin.update_password");
    }

    public function checkCurrentPassword(Request $request)
    {
        $data = $request->all();
        if (Hash::check($data["current_pwd"], Auth::guard('admin')->user()->password)) 
        {
            return response()->json(['valid' => true]);
        }else{
            return response()->json(['valid' => false]);
        }
    }
}
