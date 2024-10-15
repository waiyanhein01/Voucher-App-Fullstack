import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) =>
    set((state) => ({ records: [...state.records, record] })),

  removeRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    })),

  changeQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          const newCost =
            parseInt(record.cost) +
            parseInt(record.product.price) * parseInt(quantity);
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    })),

    resetRecord : () => set(() => ({ records: [] })),
}));

export default useRecordStore;
