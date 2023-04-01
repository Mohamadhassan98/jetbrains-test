import { defineStore, StoreDefinition } from 'pinia';
import { Actions, Getters, State } from './types';

export default function defineClassStore<Id extends string, T extends object>(
  id: Id,
  cls: T
): StoreDefinition<Id, State<T>, Getters<T>, Actions<T>> {
  const getterEntries = Object.entries(
    Object.getOwnPropertyDescriptors(Object.getPrototypeOf(cls))
  ).filter(([, descriptor]) => typeof descriptor.get === 'function');
  const getters = getterEntries.reduce(
    (prev, [currKey, currValue]) => ({
      ...prev,
      [currKey]: (state: State<T>) => currValue.get?.apply(state),
    }),
    {} as Record<
      keyof Getters<T>,
      (state: State<T>) => Getters<T>[keyof Getters<T>]
    >
  );
  const stateEntries = Object.entries(Object.getOwnPropertyDescriptors(cls));
  const state = stateEntries.reduce(
    (prev, [currKey, currValue]) => ({
      ...prev,
      [currKey]: currValue.value,
    }),
    {} as Record<keyof State<T>, State<T>>
  );
  const actionEntries = Object.entries(
    Object.getOwnPropertyDescriptors(Object.getPrototypeOf(cls))
  )
    .filter(([, descriptor]) => typeof descriptor.value === 'function')
    .filter(([key]) => key !== 'constructor');
  const actions = actionEntries.reduce(
    (prev, [currKey, currValue]) => ({
      ...prev,
      [currKey]: currValue.value,
    }),
    {} as Record<keyof Actions<T>, Actions<T>>
  );
  return defineStore(id, {
    state: () => state as any,
    getters: getters as any,
    actions,
  });
}
