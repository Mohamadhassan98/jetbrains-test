import { defineStore } from 'pinia';
import { AdminBillResponseImpl } from '@store/types';

export const useTestStore = defineStore('test', {
  state: () => ({
    filteredBills: [] as AdminBillResponseImpl[],
  }),
  getters: {
    // always undefined in runtime, but not matters for now
    currentFilteredBill: state => state.filteredBills[0],
    currentFilteredBill2: state => state.filteredBills[0],
  },
});
