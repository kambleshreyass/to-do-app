import Task from "./Task"


const Home = () => {
  return (
    <div className="container">
      <form action="">
      <h1>Daily Goals <span>✨</span></h1>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Add</button>
      </form>
      <Task/>
    </div>
  )
}

export default Home