<?php

namespace App\Http\Controllers\Api;

use App\Models\Talent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TalentController extends Controller
{
    public function talent(Request $request){

            $validation= Validator::make($request->all(),[
                'fullname'=>'required|min:5',
                'skill'=>'required|min:12',
                'education'=>'required',
                'category'=>'required',
                'email'=>'required|email|max:100|unique:users,email',
                'phone'=>'required|numeric|min:11',
                // 'image'=>'required|mimes:png,jpg,jpeg',
            ]);
            if ($validation->fails()){
                return response()->json([
                    'status'=> 422,
                    'errors'=>$validation->messages(),
                ]);
            }else{
                $talent= new Talent;
                $talent->fullname = $request->input('fullname');
                $talent->skill = $request->input('skill');
                $talent->education = $request->input('education');
                $talent->category = $request->input('category');
                $talent->email = $request->input('email');
                $talent->phone = $request->input('phone');


                if($request->hasFile('image')){
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $filename= time() .'.'.$extension;
                    $file->move('upload/talentimage/', $filename);
                    $talent->image='upload/talentimage/'.$filename;
                }

                $talent->save();

                return response()->json([
                    'status'=>200,
                    'fullname'=>$talent->fullname,
                    'message'=>'Account Created Successfully'
                ]);

            }


    }

    public function info(Request $request){
        $talent = Talent::all();
        return response()->json([
          'status'=> 200,
          'user'=>$talent,
        ]);
    }
}
