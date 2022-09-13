import { IUnit } from '@interfaces/Products/IUnit';
import { write } from '@lib/helpers';
import Unit from '@models/Products/unit.model';

class ClsUnit {
  private static units = [
    { id: 1, name: 'KG' },
    { id: 2, name: 'PZA' },
  ];

  static async initValues() {
    try {
      for (let i = 0; i < ClsUnit.units.length; i += 1) {
        const element = ClsUnit.units[i];
        // eslint-disable-next-line no-await-in-loop
        await Unit.create(element);
      }
    } catch (error) {
      write('', 'green');
    }
  }

  static async getUnits(): Promise<IUnit[]> {
    const units = await Unit.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return units;
  }

  static async getUnitById(id: number): Promise<IUnit | undefined> {
    const unit = await Unit.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (unit === null) return undefined;
    return unit;
  }

  static async createUnit(unit: IUnit): Promise<IUnit> {
    const { name } = unit;
    const newUnit = await Unit.create({ name });
    return newUnit;
  }

  static async updateUnit(id: number, unit: IUnit): Promise<IUnit | undefined> {
    const unitFound = await Unit.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (unitFound === null) return undefined;
    await unitFound.update(unit);
    return unitFound;
  }
}

export default ClsUnit;
