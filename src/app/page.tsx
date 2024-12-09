



import DontMiss from "./components/dontmiss";
import Essential from "./components/ESSENTIAL";
import Featured from "./components/FEATURED";
import Footer from "./components/footer";
import Header from "./components/header";


import Navigation from "./components/Navigation";



export default function Home() {
  return (
  <main>
 
    <Header />
    <Featured />
    <DontMiss />
    <Essential/>
    <Navigation/>
    <Footer />
  </main>
  )
}