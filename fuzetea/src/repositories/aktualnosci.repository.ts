import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BazaDataSource} from '../datasources';
import {Aktualnosci, AktualnosciRelations} from '../models';

export class AktualnosciRepository extends DefaultCrudRepository<
  Aktualnosci,
  typeof Aktualnosci.prototype.id,
  AktualnosciRelations
> {
  constructor(
    @inject('datasources.baza') dataSource: BazaDataSource,
  ) {
    super(Aktualnosci, dataSource);
  }
}
