import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const URL = 'http://localhost:8080/v1/schedule/createSchedule';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  title: string;
  description: string;

  constructor(private modalService: NgbModal, private http: HttpClient) {}
  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (String(this.title).length == 0 || String(this.title) == '') {
          alert('Informe o titulo');
          return;
        }

        this.http
          .post(URL, {
            title: this.title,
            description: this.description
          })
          .subscribe((res: Response) => {
            console.log('res', res);
            if (String(res.status) == 'success') {
              alert('Pauta cadastrada com Sucesso');
              window.location.reload();
            } else {
              //   alert(String(res.msg));
            }
          });
      });
  }
}
