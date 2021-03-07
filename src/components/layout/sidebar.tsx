import { observer } from 'mobx-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { authStore } from '../../stores'
import { DarkButton } from '../buttons'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  min-height: 100vh;
  width: 15rem;
  padding: 2rem;

  .sidebar__header {
    font-size: 70%;
    margin-bottom: 2rem;
    user-select: none;
    color: #777;
  }

  .sidebar__main {
    flex: 1;
  }

  .sidebar__nav {
    display: grid;
    gap: 1rem;
  }

  .sidebar__nav a.active {
    color: #007bff !important;
  }
`

type Route = [string /* Title */, string /* Path */, boolean /* Exact? */]

const routes: Route[] = [
  ['Users', '/users', true],
  ['Drivers', '/drivers', true],
  ['Logistics', '/logistics', true],
  ['Delivery Requests', '/delivery-requests', true],
  ['Ride Requests', '/ride-requests', true],
]

export const Sidebar: React.FC = observer(() => {
  return (
    <Wrapper>
      <header className="sidebar__header">
        <span>Platabox Admin</span>
      </header>
      <main className="sidebar__main">
        <nav className="sidebar__nav">
          {routes.map(([title, path, exact], i) => (
            <NavLink to={path} exact={exact} key={i}>
              <span>{title}</span>
            </NavLink>
          ))}
        </nav>
      </main>
      <footer>
        <DarkButton onClick={() => authStore.logOut()}>Log out</DarkButton>
      </footer>
    </Wrapper>
  )
})
