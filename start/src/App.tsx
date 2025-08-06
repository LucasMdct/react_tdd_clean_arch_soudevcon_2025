import { ChangeEventHandler, useCallback, useState } from "react"

function App() {
  const [form, setForm] = useState({
    step: 1,
    accountType: '',
    name: '',
    documentNumber: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  console.log('form', form)

  function calculateProgress() {
    let progress = 0;
    if(form.accountType) progress += 30;
    if(form.name) progress += 15;
    if(form.documentNumber) progress += 15;
    if(form.role) progress += 15;
    if(form.email) progress += 10;
    if(form.password) progress += 10;
    if(form.confirmPassword) progress += 5;
    return progress;
  }

  const updateForm: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const {name, value} = event.target;

    setForm(previous => {
      return {
        ...previous,
        [name]: value
      };
    })
  }, []);

  const next = useCallback(() => {
    setForm(previous => {
      return{
        ...previous,
        step: previous.step + 1
      }
    })
  }, [])


  const previous = useCallback(() => {
    setForm(previous => {
      return{
        ...previous,
        step: previous.step - 1 
      }
    })
  }, [])

  return (
    <div>
      <div>
        <div>
          <span>Progresso:{' '}</span>
          <span data-testid="span-progress">{calculateProgress()}%</span>
       </div>

    <div>
      <span>Passo:{' '}</span>
      <span data-testid="span-step">{form.step}</span>
    </div>
      </div>

     {/*STEP 1 */}
     {form.step === 1 ? (
      <div>
        <div>
          <input type="radio" id="administrator" name="accountType" value="administrator" onChange={updateForm} checked={form.accountType === 'administrator'} />
          <label htmlFor="administrator">Administrador</label>
        <br/>
        </div>
        <input type="radio" id="editor" name="accountType" value="editor" onChange={updateForm} checked={form.accountType === 'editor'}  />
        <label htmlFor="editor">Editor</label>
        <br />
        <input type="radio" id="operator" name="accountType" value="operator" onChange={updateForm} checked={form.accountType === 'operator'}  />
        <label htmlFor="operator">Operador</label>
      </div>
     ) : null }

     {/* STEP 2 */}
     {form.step === 2 ? (
      <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Informe seu nome" onChange={updateForm} value={form.name} />
      <br />
          <label htmlFor="documentNumber">CPF:</label>
          <input type="text" id="documentNumber" name="documentNumber" placeholder="Informe seu CPF" onChange={updateForm} value={form.documentNumber} />
      <br />
          <label htmlFor="role">Cargo:</label>
          <input type="text" id="role" name="role" placeholder="Informe seu cargo" onChange={updateForm} value={form.role} />

      </div>
     ) : null}

     {/* STEP 3 */}
     {form.step === 3 ? (
      <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" name="email" placeholder="Informe seu e-mail" onChange={updateForm}  value={form.email} />
      <br />
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" name="password" placeholder="Informe sua senha" onChange={updateForm}  value={form.password}  />
      <br />
          <label htmlFor="confirmPassword">Confirmação de senha:</label>
          <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Repita sua senha" onChange={updateForm}  value={form.confirmPassword}  />
      </div>
     ) : null}


      <div>
        <button data-testid="button-previous"  onClick={previous}>Voltar</button>
        <button data-testid="button-next"  onClick={next}>Proximo</button>
      </div>
    </div>
  )
}

export default App
