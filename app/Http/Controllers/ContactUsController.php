<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUs;

use Response;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Response::json("{x:y}", 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info('Showing user profile for user: '.$request);
        $name = $request->input('name');
        $address = $request->input('address');
        $email = $request->input('email');
        $telephone = $request->input('telephone');
        $notes = $request->input('notes');

        Mail::to('xwhizztech@gmail.com')->send(new ContactUs);

        /*Mail::send('emails.contactUs', ['title' => $name, 'content' => $notes], function ($message)
        {
            $message->from('info@xwhizz.com', 'Xwhizz Technology');
            $message->to('sandip1805@gmail.com');
        });*/

        //DB::insert('insert into contact_us (name, address, email, telephone, notes) values (?, ?, ?, ?, ?)', [$name, $address, $email, $telephone, $notes]);
	    return Response::json("success", 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
