import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Aktualnosci} from '../models';
import {AktualnosciRepository} from '../repositories';

export class AktualnosciController {
  constructor(
    @repository(AktualnosciRepository)
    public aktualnosciRepository : AktualnosciRepository,
  ) {}

  @post('/aktualnosci')
  @response(200, {
    description: 'Aktualnosci model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aktualnosci)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aktualnosci, {
            title: 'NewAktualnosci',
            exclude: ['id'],
          }),
        },
      },
    })
    aktualnosci: Omit<Aktualnosci, 'id'>,
  ): Promise<Aktualnosci> {
    return this.aktualnosciRepository.create(aktualnosci);
  }

  @get('/aktualnosci/count')
  @response(200, {
    description: 'Aktualnosci model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aktualnosci) where?: Where<Aktualnosci>,
  ): Promise<Count> {
    return this.aktualnosciRepository.count(where);
  }

  @get('/aktualnosci')
  @response(200, {
    description: 'Array of Aktualnosci model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aktualnosci, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aktualnosci) filter?: Filter<Aktualnosci>,
  ): Promise<Aktualnosci[]> {
    return this.aktualnosciRepository.find(filter);
  }

  @patch('/aktualnosci')
  @response(200, {
    description: 'Aktualnosci PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aktualnosci, {partial: true}),
        },
      },
    })
    aktualnosci: Aktualnosci,
    @param.where(Aktualnosci) where?: Where<Aktualnosci>,
  ): Promise<Count> {
    return this.aktualnosciRepository.updateAll(aktualnosci, where);
  }

  @get('/aktualnosci/{id}')
  @response(200, {
    description: 'Aktualnosci model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aktualnosci, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Aktualnosci, {exclude: 'where'}) filter?: FilterExcludingWhere<Aktualnosci>
  ): Promise<Aktualnosci> {
    return this.aktualnosciRepository.findById(id, filter);
  }

  @patch('/aktualnosci/{id}')
  @response(204, {
    description: 'Aktualnosci PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aktualnosci, {partial: true}),
        },
      },
    })
    aktualnosci: Aktualnosci,
  ): Promise<void> {
    await this.aktualnosciRepository.updateById(id, aktualnosci);
  }

  @put('/aktualnosci/{id}')
  @response(204, {
    description: 'Aktualnosci PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aktualnosci: Aktualnosci,
  ): Promise<void> {
    await this.aktualnosciRepository.replaceById(id, aktualnosci);
  }

  @del('/aktualnosci/{id}')
  @response(204, {
    description: 'Aktualnosci DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aktualnosciRepository.deleteById(id);
  }
}
