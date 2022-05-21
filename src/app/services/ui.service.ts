import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTable : boolean = false
  private subject = new Subject<any>()
  constructor() { }
  toggleTable(): void {
    this.showTable = !this.showTable
    this.subject.next(this.showTable)
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
