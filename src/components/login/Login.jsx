import styles from './login.module.css';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className={styles.container} >
      
      <div className={styles.box}>
        <div className={styles.left}>
        <h1>Sign In</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cumque tempora unde odio eveniet, tenetur voluptate nostrum nam harum veritatis fuga eaque hic maiores? Adipisci fugiat, iusto corporis, eligendi voluptatem amet voluptate perspiciatis assumenda sit, reprehenderit soluta eius sequi! Quisquam placeat earum ipsa quia officia molestias voluptatem, accusamus ut ea.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.formBox}>
          <img src="https://s3-alpha-sig.figma.com/img/5258/6633/54b4ee1c8ce4086f956ef6cda5af0bfb?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YCr6QdFaAhifYE~fMY2YJhbxcNO4wBlLwtwCIxr3r1UX~RpBsM32DFYPuwywpwkyfufcFi4Z~W94nuc3ekZHCXQbGbH-WsENiilOTsebLg4TWqmnpJ7l3Xp~mHf~3yH3HqGsApNW59uoaI0hRfKRuFxLlp0X92DSBufYL5IwDJ79oLQp2ftfDjZpksmm6DeGhJO7OPR~9sJTGDNmZjsrJsCeNFsFN5n5ervGuP~7oUocnNdv6hdjvIBAQrVl0j8P9Wecoone~zP3e~7fCpO-24M-eqFqjFnpWOJfzJs6bszO0f5CmRkv3K-heP9-5eX3uzYPujl7M2m~4db5ykJ7fg__" alt="" />
          <form>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
          </form>
          </div>
          <hr />
          <p>
            Don't have an account <Link to={"/register"}>Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login