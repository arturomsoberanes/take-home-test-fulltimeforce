import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
function Commit({ dataOfCommit }) {
  const { author, commit, html_url } = dataOfCommit

  return (
    <Card>
      <Card.Img variant="top" src={ author.avatar_url} />
      <Card.Body>
        <Card.Title>{ commit.message }</Card.Title>
        <Card.Subtitle 
          className="mb-2 text-muted"
        >
          { commit.author.name }
        </Card.Subtitle>
        <Card.Text>
          { commit.author.date }
        </Card.Text>
        <Button href={ html_url } variant="primary" >See in Github</Button>
      </Card.Body>
    </Card>
  )

}

export default Commit
