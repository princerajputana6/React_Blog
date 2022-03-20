
import { Link } from "react-router-dom";
export default function Header() {
  return (
    
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">DePronto Machine Test </h1>
        <p class="lead text-muted">This is a simple blog project where you can add, edit even delete your blog whenever you want. Firstly you have to signup and then login with your credential and then you can enter in your blog website and then enjoy !!!</p>
        <p>
         
          <Link class="btn btn-secondary my-2 mx-2" to="/settings">
          Your Profile
              </Link>
          
          <Link class="btn btn-primary my-2 mx-2" to="/write">
                Add Blog
              </Link>
        </p>
      </div>
    </div>
  </section>
  );
}
