<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;


    public $mailData;
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    public function build()
    {
        return $this->subject($this->mailData["subject"])
            ->view($this->mailData["view"])->with("mailData", $this->mailData);
    }

    public function attachments()
    {
        $path_arr = $this->mailData['path'];
        if (count($path_arr) != 0) {
            $attachement = array();
            foreach ($path_arr as $path) {
                array_push($attachement, Attachment::fromPath($path));
            }
            return  $attachement;
        } else {
            return [];
        }
    }
}
