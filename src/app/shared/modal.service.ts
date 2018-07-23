import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    public events: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public get status(): Observable<boolean> {
        return this.events.asObservable();
    }

    public show() {
        this.events.next(true);
    }

    public hide() {
        this.events.next(false);
    }
}
