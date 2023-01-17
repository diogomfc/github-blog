import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ContainerDefault } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerDefault>
        <Outlet />
      </ContainerDefault>
    </>
  )
}
