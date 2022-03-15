import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form className='create-form'>
    <Form.Field>
      <label>Tytuł</label>
      <input placeholder='Wprowadź tytuł' />
    </Form.Field>
    <Form.Field>
      <label>Data</label>
      <input placeholder='Wprowadź treść' />
    </Form.Field>
    <Form.Field>
    <label>Treść</label>
      <TextArea placeholder='Wprowadź treść' style={{ minHeight: 100 }} />
    </Form.Field>
    <Form.Field>
      <label>Autor</label>
      <input placeholder='Wprowadź autora' />
    </Form.Field>
    <Button type='submit'>Zapisz</Button>
  </Form>
)

export default FormExampleForm