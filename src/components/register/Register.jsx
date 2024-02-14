import styles from './register.module.css';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className={styles.container} >
      
      <div className={styles.box}>
        <div className={styles.left}>
          <h1>Sign Up</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cumque tempora unde odio eveniet, tenetur voluptate nostrum nam harum veritatis fuga eaque hic maiores? Adipisci fugiat, iusto corporis, eligendi voluptatem amet voluptate perspiciatis assumenda sit, reprehenderit soluta eius sequi! Quisquam placeat earum ipsa quia officia molestias voluptatem, accusamus ut ea.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.formBox}>
          <img src="https://i.pinimg.com/564x/9d/3a/a1/9d3aa1c2648372c8e75dc3d79f06f67f.jpg" alt="" />
          <form>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
          </form>
          </div>
          <hr />
          <p>
            Don't have an account <Link to={"/login"}>Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login