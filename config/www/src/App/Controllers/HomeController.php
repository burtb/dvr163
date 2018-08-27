<?php

namespace App\Controllers;

class HomeController extends BaseController {

    public function __construct(){
        $this->host = getenv('HOST');
    }
    
    public function show(){

        $this->lds_ring = file_get_contents('html/lds-ring.html');
        // $i = -1;
        // while(++$i < $this->cam_count){
        //     $this->lds_ring .= $this->get_img_tag($i);
        // }

        ob_start();
        include(dirname(__FILE__) . '/../../home.php');
        return ob_get_clean();
        
    }

    private function get_img_tag($channel){

        $src = $url = $this->get_cgi_url('sp', [
            'chn' => $channel,
            'q' => 2] // No idea what this does
        );

        return "<img src='$src'>\n";

    }
}