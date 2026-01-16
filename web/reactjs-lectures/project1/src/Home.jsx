import MyButton from "./components/MyButton"

const Home = () => {

    const printSum = () => {
        let a = 10;
        let b = 20;
        console.log("Sum is ", a+b)
    }
  return (
    <>
     <h1>This is home page</h1>
            <MyButton onclick={printSum} title="Get started" />
    </>
  )
}

export default Home
