<?php

namespace App\Http\Controllers\Api;

use App\Models\Job;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class Jobcontroller extends Controller
{
    public function job(Request $request){
            $validator = validator::make($request->all(),[
                'title_post'=>'required',
                'company'=>'required',
                'education'=>'required',
                'category'=>'required',
                'skill'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json ([
                    "validation_errors"=> $validator->messages(),
                ]);


            } else {
                $job= Job::create([
                    'title_post'=>$request->title_post,
                    'company'=>$request->company,
                    'education'=>$request->education,
                    'category'=>$request->category,
                    'skill'=>$request->skill,
                ]);
                return response()->json([
                    "status"=> 200,
                    "title_post"=> $job->title_post,
                    "category"=>$job->category,
                    "message"=>"Posted Successfully"
                ]);
            }



    }

    public function home(){

        $job=  Job::all();
        return response()->json([
          'status'=> 200,
          'user'=>$job,
        ]);

      }
      public function search($key){
        return Job::where( 'title_post', 'Like', "%$key%")->get();
      }
}
