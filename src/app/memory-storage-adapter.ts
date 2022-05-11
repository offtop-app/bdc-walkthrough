import { BdcWalkStorageAdapter, TaskList } from 'bdc-walkthrough';

class MemoryStorageAdapter extends BdcWalkStorageAdapter {
  private tasks: TaskList;

  protected _get(): TaskList {
    return this.tasks;
  }

  protected _set(tasks: TaskList): void {
      this.tasks = tasks;
  }
}

export default MemoryStorageAdapter;
