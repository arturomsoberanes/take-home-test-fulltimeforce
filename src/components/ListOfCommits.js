import { ListGroup } from "react-bootstrap"
import Commit from "./Commit"
function ListOfCommits({ commits }) {
  return (
    <ListGroup>
      {
        commits.map( ( commit, i ) => {
          return (
            <ListGroup.Item 
              key={i}
              variant="danger">
              <h2>Commit</h2>
              <Commit dataOfCommit={commit}/>
            </ListGroup.Item>
          )
      })
      }
    </ListGroup>
  )

}

export default ListOfCommits
