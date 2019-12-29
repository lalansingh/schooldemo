import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from '../../dialog/email/email.component';
import { SmsComponent } from '../../dialog/sms/sms.component';
import { Router } from '@angular/router';

@Component({
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss']
})
export class ActionComponent implements ICellRendererAngularComp {
    params: any;

    constructor(private modalService: NgbModal, config: NgbModalConfig, private router: Router) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    public onEmailClick() {
        const modalRef = this.modalService.open(EmailComponent, { centered: true, size: "xl" });
        modalRef.componentInstance.name = 'World';
    }

    public onSmsClick() {
        const modalRef = this.modalService.open(SmsComponent, { centered: true, size: "xl" });
        modalRef.componentInstance.name = 'World';
    }

    public onViewClick() {
        this.router.navigate(['/registration', { mode: 'view' }]);
    }

    public onEditClick() {
        this.router.navigate(['/registration', { mode: 'edit' }]);
    }

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        return false;
    }
}