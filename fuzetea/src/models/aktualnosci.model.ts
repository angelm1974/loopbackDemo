import {Entity, model, property} from '@loopback/repository';

@model()
export class Aktualnosci extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  tytul: string;

  @property({
    type: 'date',
    required: true,
  })
  dataWpisu: string;

  @property({
    type: 'string',
    default: "",
  })
  tresc?: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;


  constructor(data?: Partial<Aktualnosci>) {
    super(data);
  }
}

export interface AktualnosciRelations {
  // describe navigational properties here
}

export type AktualnosciWithRelations = Aktualnosci & AktualnosciRelations;
