import { RepositoryItem } from './components/RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com'
}

import './styles/global.css'

function App() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem
          name={repository.name}
          description={repository.description}
          link={repository.link}
        />
        <RepositoryItem
          name={repository.name}
          description={repository.description}
          link={repository.link}
        />
        <RepositoryItem
          name={repository.name}
          description={repository.description}
          link={repository.link}
        />
      </ul>
    </section>
  )
}

export default App
