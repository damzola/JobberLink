<?php

namespace App\Http\Controllers\Api;

// use App\Models\Job;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function Register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|email|max:100|unique:users,email',
            'password'=>'required|min:8',
            'category'=>'required',
            'country'=>'required',
            'agree'=>'required'
        ]);
        if($validator->fails())
        {
            return response()->json([ 
                "validation_errors" =>$validator->messages(),
            ]);

        }else{
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
                'country'=>$request->country,
                'category'=>$request->category,
                'agree'=>$request->agree
            ]);
            $token = $user->createToken($user->email.'_Token')->plainTextToken;
             return response()->json([
                "status"=>200,
                "username"=>$user->name,
                "token"=>$token,
                "message"=> "Register Successful"
             ]);
        }
    }



    public function signin(Request $request){
        $validator=Validator::make($request->all(),[
            "email"=> "required|max:110",
            "password"=> "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                "validation_errors"=>$validator->messages(),
            ]);
        } else {
            # CALL TO THE MODEL
            $user= User::where('email',$request->email)->first();
                if (! $user || ! Hash::check($request->password, $user->password)) {
                    return response()->json([
                        'status'=>401,
                        'message'=> 'Invalid Information',
                    ]);
        }else{
            $token = $user->createToken($user->email.'_Token')->plainTextToken;
             return response()->json([
                "status"=>200,
                "username"=>$user->name,
                "token"=>$token,
                "message"=> "Logged In Successfully",
             ]);
        }

    }
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=> 200,
            "message"=>'Logged Out Successfully',
        ]);
    }
}
