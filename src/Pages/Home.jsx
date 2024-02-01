import Navbar from "../Components/Navbar"

const Home = () => {

  const url = 'https://restaurants222.p.rapidapi.com/languages';


  return (
    <>
      <Navbar />
    <div className='text-white flex items-center justify-center'>
      <h1>Home</h1>
    </div>
    </>
  )
}

export default Home