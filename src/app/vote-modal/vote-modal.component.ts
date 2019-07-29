import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:8080/v1/schedule/addVote';

@Component({
  selector: 'app-vote-modal',
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.css']
})
export class VoteModalComponent {
  cpf: string;
  voto: string;

  @Input()
  schedule: string;
  constructor(private modalService: NgbModal, private http: HttpClient) {}

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.http
          .post(URL, {
            associate: this.cpf,
            vote: this.voto == 'SIM' ? '1' : '0',
            schedule: String(this.schedule)
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
