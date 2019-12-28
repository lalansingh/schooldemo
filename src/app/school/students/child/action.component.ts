import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from '../../dialog/email/email.component';

@Component({
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss']
})
export class ActionComponent implements ICellRendererAngularComp {
    params: any;

    constructor(private modalService: NgbModal, config: NgbModalConfig) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    public email() {
        const modalRef = this.modalService.open(EmailComponent);
        // modalRef.componentInstance.name = 'World';
    }

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        return false;
    }
}