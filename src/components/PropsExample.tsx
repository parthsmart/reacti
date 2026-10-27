type GreetingProps = {
  name: string
}

function Greeting({ name }: GreetingProps) {
  return <p className="example-card">Hello {name}</p>
}

export function PropsExample() {
  return <Greeting name="Bishwas" />
}
