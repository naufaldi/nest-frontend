import Form from 'components/homepage/Form'
import ListMenu from 'components/common/ListMenu'
import Layout from 'components/Layout'
import useToggle from 'hooks/useToggle'
import React, { useState } from 'react'

const Homepage = () => {
  const [toggle, setToggle] = useToggle(false)

  return (
    <Layout>
      <ListMenu />
      <Form />
    </Layout>
  )
}

export default Homepage
