<?php class Site_model extends CI_Model {


        
        public function __construct()
        {
                parent::__construct();
                // Your own constructor code
        }

        
        public function get_last_ten_entries()
        {
                $query = $this->db->get('entries', 10);
                return $query->result();
        }
        
        public function get_category_byid()
        {       
              $postdata = file_get_contents("php://input");
               $request = json_decode($postdata);
          
                $this->db->where('id',$request);
                $query = $this->db->get('category');
                $result= $query->result();
                return $result[0];
        }

        public function update_category(){
              $postdata = file_get_contents("php://input");
               $request = json_decode($postdata);
             //  print_r($request);die;
                $name = $request->name;
                $id = $request->id;

                $status = $request->status;
                $this->name    = $name; // please read the below note
                $this->status  = $status;
       

                      $this->db->where('id',$id);
             return   $this->db->update('category', $this);
        }

         public function get_category()
        {
                $query = $this->db->get('category');
                $result= $query->result();
                return $result;
        }

         public function set_category()
        {
               $postdata = file_get_contents("php://input");
               $request = json_decode($postdata);

                $name = $request->name;
                $status = $request->status;
                $this->name    = $name; // please read the below note
                $this->status  = $status;
                $this->create_date     = date('Y-m-d H:i:s');
             return   $this->db->insert('category', $this);

               
        }
        public function delete_category(){
                $postdata = file_get_contents("php://input");
                $request = json_decode($postdata);
                $this->db->where('id', $request);
            return $this->db->delete('category');       
        }

        public function check_unique_category($value){
            print_r($value);
        }

        public function get_product(){
                 $query = $this->db->get('product');
                $result= $query->result();
                return json_encode($result);
        }
        public function insertcategory(){


         $postdata = file_get_contents("php://input");
         $request = json_decode($postdata);
         //print_r($request);       
                  $name = $request->name;
                  $status = $request->status;
    
              
              //  $this->form_validation->set_rules($name, 'Category Name', 'required|min_length[2]|max_length[12]');
             //   $this->form_validation->set_rules($status, 'Status', 'required');
                 // if ($this->form_validation->run() == True){
              $this->db->where('name',$name);
            $query=  $this->db->get('category');
         if ($query->num_rows() == 0) {
        $array=array('name'=>$name,'status'=>$status,'create_date'=>date('Y-m-d H:i:s'));

               return $this->db->insert('category', $array);
             }else{
              return false;
              }
        }
        public function updatecategory(){

         $postdata = file_get_contents("php://input");
         $request = json_decode($postdata);
      //   print_r($request);    

           $name = $request->name;
                  $status = $request->status;
            $array=array('name'=>$name,'status'=>$status);
            $condition=array('id'=> $request->id);
               return $this->db->update('category', $array,$condition);
        }
        public function insert_entry()
        {
                $this->title    = $_POST['title']; // please read the below note
                $this->content  = $_POST['content'];
                $this->date     = time();

                $this->db->insert('entries', $this);
        }

        public function update_entry()
        {
                $this->title    = $_POST['title'];
                $this->content  = $_POST['content'];
                $this->date     = time();

                $this->db->update('entries', $this, array('id' => $_POST['id']));
        }

}