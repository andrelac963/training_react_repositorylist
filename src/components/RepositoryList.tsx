import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.css'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com'
}

export function RepositoryList() {
  ;<section className="repository-list">
    <h1>Lista de Reposutórios</h1>
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
}
