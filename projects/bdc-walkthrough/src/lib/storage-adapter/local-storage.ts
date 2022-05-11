import type { TaskList } from '../bdc-walk.service';
import { BdcWalkStorageAdapter } from './storage-adapter';

class LocalStorageAdapter extends BdcWalkStorageAdapter {
  constructor(private key: string = 'bdcWalkthrough') {
    super();
  }

  protected _get(): TaskList {
      return JSON.parse(localStorage.getItem(this.key)) || {}
  }

  protected _set(tasks: TaskList) {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }
}

export { LocalStorageAdapter };
