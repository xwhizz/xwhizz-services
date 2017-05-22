<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;
    public $input;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->input = $request->all();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
         return $this->from('info@xwhizz.com')
                        ->view('emails.contactUs')
                        ->with([
                            'name' => $this->input['name'],
                            'address' => $this->input['address'],
                            'email' => $this->input['email'],
                            'phone' => $this->input['telephone'],
                            'note' => $this->input['notes']
                        ]);
    }
}
