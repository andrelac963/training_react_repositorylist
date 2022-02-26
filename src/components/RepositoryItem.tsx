type RepositoryProps = {
  name: string
  description: string
  link: string
}

export function RepositoryItem(props: RepositoryProps) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Link do GitHub</a>
    </>
  )
}
