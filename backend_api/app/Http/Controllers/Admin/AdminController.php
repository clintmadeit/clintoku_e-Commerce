<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image as Image;

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

    public function updateDetails(Request $request)
    {
        if ($request->isMethod("POST")) {
            $data = $request->all();
            // echo "<prev>"; print_r($data); die();
            $rules = [
                "admin_name" => "required|regex:/^[a-zA-Z\s]{4,255}$/|max:255",
                "admin_mobile" => "required|numeric|digits:13",
                "admin_image" => "image",
                ];
                
                $customMessages = [
                    "admin_name.required"=> "Valid Name is required",
                    "admin_name.regex"=> "Valid Name is required",
                    "admin_name.max"=> "Valid Name is required",
                    "admin_mobile.required" => "Mobile is required",
                    "admin_mobile.numeric" => "Valid Mobile is required",
                    "admin_mobile.digits" => "Valid Mobile is required",
                    "admin_image.image" => "A valid Image is required",
                    ];
                $this->validate($request, $rules, $customMessages);

            // Upload the admin image here
            if ($request->hasFile("admin_image")) {
                $image_tmp = $request->file("admin_image");
                if ($image_tmp->isValid()) {
                    // Get image extension
                    $ext = $image_tmp->getClientOriginalExtension();
                    // Generate new image name
                    $filename = rand(111, 99999) .".". $ext;
                    $filename_path = 'admin/img/photos/'.$filename;
                    Image::make($image_tmp)->save($filename_path);
                }
            }

            // Update Admin Details
            Admin::where("email", Auth::guard('admin')->user()->email)->update(
                ['name' => $data['admin_name'], 'phone_number' => $data['admin_mobile'],
            
            'image' => $filename]);

                return redirect()->back()->with('success','Admin Details Updated Successfully');
        }
        return view('admin.update_details');
    }
}
