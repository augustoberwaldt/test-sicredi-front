import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

const URL = 'http://localhost:8080/v1/schedule/updateSchedule';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.css']
})
export class SessionModalComponent {
  timeend: string;
  timestart: string;

  @Input()
  schedule: string;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        let timeend_split = this.timeend.split(':');
        let timestart_split = this.timestart.split(':');
        console.log('timestart_split', timestart_split);

        let timestartcalc = +timestart_split[0] * 60;
        timestartcalc = timestartcalc + +timestart_split[1];
        let timeendcalc = +timeend_split[0] * 60;
        timeendcalc = timeendcalc + +timeend_split[1];

        let sumtime = Math.abs(+timestartcalc - +timeendcalc);

        this.http
          .put(URL, {
            schedule: this.schedule,
            time: sumtime,
            timeend: timestartcalc,
            timestart: timestartcalc,
            dtFinish: false
          })
          .subscribe((res: Response) => {
            console.log('res', res);
            if (String(res.status) == 'success') {
              alert('Sessão Iniciada com Sucesso !');
              var clearI = setInterval(() => {
                this.http
                  .put(URL, {
                    schedule: this.schedule,
                    time: sumtime,
                    timeend: timestartcalc,
                    timestart: timestartcalc,
                    dtFinish: true
                  })
                  .subscribe(() => {
                    clearInterval(clearI);
                  });
              }, sumtime * 60000);
              window.location.reload();
            } else {
              //   alert(String(res.msg));
            }
          });
      });
  }
}
