import { IStore } from '@interfaces/Products/IStore';
import { write } from '@lib/helpers';
import Store from '@models/Products/store.model';

class ClsStore {
  private static stores = [{ id: 1, name: 'DISTRIBUIDORA MUNDIAL' }];

  static async initValues() {
    try {
      for (let i = 0; i < ClsStore.stores.length; i += 1) {
        const element = ClsStore.stores[i];
        // eslint-disable-next-line no-await-in-loop
        await Store.create(element);
      }
    } catch (error) {
      write('', 'green');
    }
  }

  static async getStores(): Promise<IStore[]> {
    const stores = await Store.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return stores;
  }

  static async getStoreById(id: number): Promise<IStore | undefined> {
    const store = await Store.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (store === null) return undefined;
    return store;
  }

  static async createStore(store: IStore): Promise<IStore> {
    const { name } = store;
    const newStore = await Store.create({ name });
    return newStore;
  }

  static async updateStore(id: number, store: IStore): Promise<IStore | undefined> {
    const storeFound = await Store.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (storeFound === null) return undefined;
    await storeFound.update(store);
    return storeFound;
  }
}

export default ClsStore;
