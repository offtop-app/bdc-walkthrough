import type { TaskList } from '../bdc-walk.service';
import { BehaviorSubject, Observable } from 'rxjs';

abstract class BdcWalkStorageAdapter {
  protected _notify = new BehaviorSubject<void>(null);

  protected abstract _get(): TaskList;
  protected abstract _set(tasks: TaskList): void;

  get() {
    return this._get() || {};
  }

  set(tasks: TaskList) {
    this._set(tasks);
    this._notify.next();
  }

  public get onSave() : Observable<void> {
    return this._notify.asObservable();
  }

}

export { BdcWalkStorageAdapter };
