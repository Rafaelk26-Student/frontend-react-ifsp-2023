import './Logout.css'

const Logout = () => {
    return (
    <div className="center">
      <div className='Form-input'>
        <h1>Login</h1>
        <form action="/" method="get">
            <label htmlFor="login">
                <h5>Login</h5>
                <input type="text" className="login" />
            </label>
            <label htmlFor="password">
                <h5>Senha</h5>
                <input type="password" className="password" />
            </label>
            <button type="submit">Acessar</button>
        </form>
      </div>
      </div>
    )
  }
  
  export default Logout