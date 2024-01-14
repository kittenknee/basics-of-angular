import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToDoListing } from '../todoList';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-data-live',
  templateUrl: './data-live.component.html',
  styleUrls: ['./data-live.component.scss']
})
export class DataLiveComponent implements OnInit {
  container_title = "Live Data Table";
  todolist: ToDoListing[] = [];
  addData!:FormGroup;
  editData!:FormGroup;
  submitted = false;
  id="";
  userid="";
  title="";
  completed="";

  updating!: any;
  viewData!: { id: number; userId: number; title: string; completed: string; };

  constructor(private crud: CrudService, private fb: FormBuilder, private auth: AuthService) {
    this.addData = this.fb.group({
      // id: new FormControl('', [Validators.required]), 
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      completed: new FormControl('', [Validators.required])
    });
    this.editData = this.fb.group({
      id: [{value: ''},[Validators.required]], //, disabled: true
      userId: [{value: ''},[Validators.required]],
      title: [{value:''},[Validators.required]],
      completed:[{value: ''},[Validators.required]]
    });
  }

  get regFormControl(){
    return this.addData.controls;
  }

  getData(){
    this.crud.getToDo().subscribe((data) => {
      this.todolist = data;
      console.log(this.todolist)
    });  
  }

  view(id: number){
    this.crud.getToDobyID(id).subscribe((data) => {
      this.viewData = data;
      console.log(this.viewData)
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.addData.valid){
      console.table(this.addData.value);
      this.addEntry();
    }
    else{
      console.error('Error adding')
    }
  }

  addEntry(){
    const newData = this.addData.value;
    this.crud.addToDo(newData).subscribe((data)=>{
      alert("Added Successfully");
      this.resetForm();
      this.getData();
    })
  }

  update(id: number){
    this.crud.getToDobyID(id).subscribe((data) => {
      this.updating = data;
      console.log(this.updating)
    })
  }

  edit(id: number){
    this.crud.getToDobyID(id).subscribe((data) => {
      this.updating = data;
      console.log(this.updating)
      this.setDefault();
    })
  }

  setDefault(){
    let entries = {
      id: this.updating.id,
      userId: this.updating.userId,
      title: this.updating.title,
      completed: this.updating.completed,
    };
    this.editData.setValue(entries);
  }

  onSave(){
    this.submitted = true;
    if(this.editData.valid){
      console.table(this.editData.value);
      this.updateEntry();
    }
    else{
      console.table(this.editData.value);
      console.error('Error updating')
    }
  }

  updateEntry(){
    const updateddata = this.editData.value;
    this.crud.updateToDo(updateddata).subscribe(()=>{
      alert('Updated Successfully');
      this.getData();
    });
  }

  deleteData(id: number){
    console.log(id)
    this.crud.deleteToDo(id).subscribe((data:any) => {
      this.getData()
    })
  }

  resetForm(){
    this.addData.reset();
  }

  ngOnInit(): void {
    this.todolist.sort((a: any, b:any) => (a.id > b.id) ? 1 : -1);
    this.getData()
    
  }
  
}
