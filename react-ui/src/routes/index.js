import { Route } from "react-router-dom";

import About from "./about/about";
import Contact from "./contact/contact";
import Credits from "./credits/credits";
import Reviews from "./reviews/reviews";
import Search from "./search/search";
import AdvSearch from "./search/advancedSearch";
import AddReview from "../components/addReview";

const Routes = () => {
  return(
      <>
        <Route 
        exact={true}
        path="/"
        render={()=> <Search />}
        />
        <Route 
        exact={true}
        path="/adv-search"
        render={()=> <AdvSearch />}
        />
        <Route 
        exact={true}
        path="/reviews"
        render={()=> <Reviews />}
        />
        <Route 
        exact={true}
        path="/about"
        render={()=> <About />}
        />
        <Route 
        exact={true}
        path="/contact"
        render={()=> <Contact />}
        />
        <Route 
        exact={true}
        path="/user-review"
        render={()=><AddReview />}
        />
        <Route 
        exact={true}
        path="/reviews/:id"
        render={()=> <p>review id Page</p>}
        />
        {/* <Route 
        exact={true}
        path="/advanced-search"
        render={()=> <Search />}
        /> */}
        <Route 
        exact={true}
        path="/credits"
        render={()=> <Credits />}
        />
      </>
  )
}

export default Routes;