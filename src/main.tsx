import React from 'react'
import { createRoot } from 'react-dom/client'
import Page from './Page'
import { readPageData } from './lib/readPageData'
import './styles/global.scss'

const data = readPageData()
createRoot(document.getElementById('root')!).render(<Page data={data} />)
