import { Container } from "react-bootstrap";
import { Octokit } from "octokit";

function App() {
  const octokit = new Octokit({ });
  async function getDataAPI() {
    const res = await octokit.request("GET /octocat", {});
    console.log(res)
  }
  getDataAPI()
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  )
}

export default App
