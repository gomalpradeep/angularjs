<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Site extends CI_Controller {

	   public function __construct(){	
		parent::__construct();
               $this->load->library('form_validation');
            		
        }
        public function index()
        {
                echo 'Hello World!';
        }
         // ------------------ Start catgory-------------------- 
        public function get_category($status=null){
            $result=json_encode($this->site_model->get_category($status));
            echo $result;
        }

        public function set_category(){

            echo   $this->site_model->set_category();

        }
        public function get_category_byid(){
            $result=  $this->site_model->get_category_byid();
            echo json_encode($result);
        }
        public function delete_category(){
            echo   $this->site_model->delete_category();
        }

        public function update_category(){
            echo   $this->site_model->update_category();
        }

        public function viewcategory(){

             $data['result']=    $this->site_model->get_category();
             $this->load->view('view_category',$data);

        }

        // ------------------ end catgory-------------------- 
        // ------------------ Start product-------------------- 
        public function uploadfile()
        {

            $json = array();

            $config['upload_path']          =dirname($_SERVER["SCRIPT_FILENAME"])."/upload/";

            $config['allowed_types']        = 'gif|jpg|png';
            $config['encrypt_name']                 = TRUE;

            $this->load->library('upload', $config);

            $this->upload->initialize($config);

            if ( ! $this->upload->do_upload('file') )
            {
                $json = array('error' => true, 'message' => $this->upload->display_errors());
            }
            else
            {
                $upload_details = $this->upload->data();

                $json = array('success' => true, 'message' => 'File transfer completed', 'newfilename' => $upload_details['file_name']);
            }

            echo json_encode($json);
        }

        public function product(){
          $data['result']=    $this->site_model->get_product();
         // print_r($data['result']);
              $this->load->view('view_product',$data);
        }
        public function get_product(){

            echo  json_encode($this->site_model->get_product());

        }
        public function set_product(){

            echo   $this->site_model->set_product();

        }
        public function get_product_byid(){
            $result=  $this->site_model->get_product_byid();
            echo json_encode($result);
        }
        public function delete_product(){
            echo   $this->site_model->delete_product();
        }

        public function update_product(){
            echo   $this->site_model->update_product();
        }
       // ------------------ end catgory-------------------- 
        public function view_product(){
            $data['result']=    $this->site_model->get_product();
            $this->load->view('product_list',$data);
        }
        public function addcategory(){
             

                $this->form_validation->set_rules('category_name', 'Category Name', 'required|min_length[2]|max_length[12]|is_unique[category.name]');
                $this->form_validation->set_rules('status', 'Status', 'required');

                if ($this->form_validation->run() == True)
                 {
               
                  $this->site_model->insertcategory();
                                	
                }

        	$this->load->view('add_category');
        }
        public function insertcategory(){
                

         $data= $this->site_model->insertcategory();
             if($data)
          {
             echo "success";
          }else{
             echo "failure";
          }
        }
        public function updatecategory(){
             $data= $this->site_model->updatecategory();
        }


}