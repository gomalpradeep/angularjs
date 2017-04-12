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
        public function get_category(){

            echo  $this->site_model->get_category();
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
        public function product(){
          $data['result']=    $this->site_model->get_product();
         // print_r($data['result']);
              $this->load->view('view_product',$data);
        }

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