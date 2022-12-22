import { Container } from "react-bootstrap";
import { Octokit } from "octokit";
import { useState, useEffect } from "react";
import ListOfCommits from "./components/ListOfCommits";
import './App.css'

function App() {
  const [commits, setCommits] = useState(null)

  useEffect(() => {
    const octokit = new Octokit({ });
    async function getDataAPI() {
      const res = await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
        owner: 'arturomsoberanes',
        repo: 'take-home-test-fulltimeforce'
      })
      return res.data
    }

    getDataAPI().then(data => {
      console.log(data)
      setCommits(data)
    })


  }, [])
  return (
    <Container className="text-center">
      <h1 className="my-4">Latest Commits of this project</h1>
      <ul>
        { 
          commits ? (
            <ListOfCommits commits={commits}/>
          ) : <h1>Loading...</h1>
        }
      </ul>
    </Container>
  )
}

export default App
