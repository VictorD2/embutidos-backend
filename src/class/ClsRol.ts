/* eslint-disable @typescript-eslint/no-explicit-any */
import { write } from '@lib/helpers';
import Rol, { RolInput } from '@models/rol.model';

class ClsRol {
  private static rols: RolInput[] = [
    {
      id: 1,
      name: 'Administrador',
    },
    {
      id: 2,
      name: 'Usuario',
    },
  ];

  static async createInitialRols() {
    try {
      await Rol.create(ClsRol.rols[0]);
      await Rol.create(ClsRol.rols[1]);
    } catch (error: any) {
      write('', 'green');
    }
  }
}

export default ClsRol;
