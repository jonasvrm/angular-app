import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from "../modal.service";
import { UsersEditComponent } from '../../users/users-edit/users-edit.component';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  @ViewChild("modalBody", { read: ViewContainerRef }) modal;

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.modalService.status.subscribe(event => {
      if(event == true){
        this.openModal();
      }
      if(event == false){
        this.closeModal();
      }
    });
  }

  openModal(){
    $('#GeneralModal').modal('show');
  }

  closeModal() {
  }

  public setContent(){

  }
}
