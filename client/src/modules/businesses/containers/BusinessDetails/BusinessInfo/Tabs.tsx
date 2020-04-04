import React from 'react'
import { Typography } from '@material-ui/core'

export interface Tab {
  name: string
  content: string
  title: string
}

const tabs: Tab[] = [
  {
    name: 'Our goal',
    title: 'Please help us survive',
    content:
      'Nostrud aute fugiat veniam tempor. Et quis veniam elit laborum officia elit cillum. Aute irure mollit sint irure cupidatat pariatur ullamco non do magna anim consequat elit pariatur. Quis in amet ut qui voluptate velit velit mollit dolore non. Magna amet cillum est pariatur nisi. Do incididunt id irure Lorem ut velit est incididunt.. \n\nLabore in sint cupidatat ut consectetur ad fugiat velit commodo aute incididunt minim non. Adipisicing anim ut voluptate anim labore. Aliqua ea magna nisi id.',
  },
  {
    name: 'About us',
    title: "We're awesome",
    content:
      'Cupidatat cupidatat id proident dolore. In elit duis anim irure est sit ad id deserunt non ad fugiat. Eu laborum et duis anim duis ut proident quis incididunt sunt. Non officia mollit irure proident aute consectetur mollit pariatur cupidatat voluptate est. Magna anim voluptate nostrud dolore.',
  },
  {
    name: 'Our history',
    title: 'Heritage',
    content:
      'Pariatur Lorem cupidatat exercitation in laboris in in nisi occaecat tempor excepteur id do nostrud.Consectetur ut proident culpa officia. Fugiat magna aliqua in do reprehenderit ipsum ullamco sit.\n\n Voluptate enim esse nulla labore fugiat ex nulla. Cillum culpa fugiat proident non.',
  },
  {
    name: 'Our team',
    title: 'The best people',
    content:
      'Nisi deserunt tempor qui aute elit excepteur.Nisi minim culpa nulla quis velit quis mollit laborum proident. \n\nLabore in sint cupidatat ut consectetur ad fugiat velit commodo aute incididunt minim non. Adipisicing anim ut voluptate anim labore. Aliqua ea magna nisi id.',
  },
]

export default tabs
