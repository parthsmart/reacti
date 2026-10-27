type GreetingCardProps = {
  name: string
  role: string
  favoriteTopic: string
}

function GreetingCard({ name, role, favoriteTopic }: GreetingCardProps) {
  return (
    <article className="example-card">
      <span className="eyebrow">Child component</span>
      <h3>Hello, {name}!</h3>
      <p>
        You are learning React as a <strong>{role}</strong>.
      </p>
      <p>
        Favorite topic: <strong>{favoriteTopic}</strong>
      </p>
    </article>
  )
}

export function PropsExample() {
  return (
    <section className="lesson" aria-labelledby="props-heading">
      <div className="lesson-copy">
        <span className="lesson-number">01</span>
        <h2 id="props-heading">Props pass data down</h2>
        <p>
          Props are read-only values a parent component sends to a child.
          Destructure them in the child to make the data easy to use.
        </p>
        <pre>
          <code>{'<GreetingCard name="Ada" role="developer" />'}</code>
        </pre>
      </div>
      <GreetingCard
        name="Ada"
        role="developer"
        favoriteTopic="component design"
      />
    </section>
  )
}
