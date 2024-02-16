import styles from "./register.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left}>
          <h1>Sign Up</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            cumque tempora unde odio eveniet, tenetur voluptate nostrum nam
            harum veritatis fuga eaque hic maiores? Adipisci fugiat, iusto
            corporis, eligendi voluptatem amet voluptate perspiciatis assumenda
            sit, reprehenderit soluta eius sequi! Quisquam placeat earum ipsa
            quia officia molestias voluptatem, accusamus ut ea.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.formBox}>
            <img
              src="https://github.com/Akhileswar1905/Alliance/blob/main/public/assets/lock.png"
              alt=""
            />
            <form>
              <input type="text" placeholder="Organization Name" />
              <input type="number" placeholder="Year of Establishment" />
              <input type="text" placeholder="Domain of the Organizationn" />
              <input type="text" placeholder="State, Country" />
              <textarea placeholder="Description of the Organization" />
              <button>Sign Up</button>
            </form>
          </div>
          <hr />
          <p>
            Don&apos;t have an account <Link to={"/login"}>Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
