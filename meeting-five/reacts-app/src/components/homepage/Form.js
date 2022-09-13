import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const Form = () => {
  const [firstName, setFirstName] = useState('Naufaldi')
  const [lastName, setLastName] = useState('Satriya')
  const [company, setCompany] = useState('eFishery')

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e) => {
    setLastName(e.target.value)
  }
  const onChangeCompany = (e) => {
    setCompany(e.target.value)
  }
  const onSubmbit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, company)
  }
  return (
    <form className="container mx-auto" onSubmit={(e) => onSubmbit(e)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Input
          className={'mb-4'}
          id={'first_name'}
          label={'First Name'}
          onChange={(e) => onChangeFirstName(e)}
          placeholder={'First Name'}
          type={'text'}
          value={firstName}
        />
        <Input
          className={'mb-4'}
          id={'last_name'}
          label={'Last Name'}
          onChange={(e) => onChangeLastName(e)}
          placeholder={'Last Name'}
          value={lastName}
          type={'text'}
        />
        <Input
          className={'mb-4'}
          id={'company'}
          label={'Company'}
          onChange={(e) => onChangeCompany(e)}
          placeholder={'Company'}
          type={'text'}
          value={company}
        />
      </div>

      <Button className={'w-40'}> Submit</Button>
    </form>
  )
}

export default Form
