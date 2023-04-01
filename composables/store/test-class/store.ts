import { AdminBillResponseImpl } from '@store/types';
import defineClassStore from '~/lib/Pinia';

class TestStore {
  filteredBills: AdminBillResponseImpl[] = [];

  get currentFiltered() {
    return this.filteredBills[0];
  }

  get currentFiltered2() {
    return this.filteredBills[0];
  }
}

export const useTestClassStore = defineClassStore(
  'test-class',
  new TestStore()
);
