import { useState } from "react";
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [lista, setLista] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const novoComentario = {
      id: Date.now(),
      email: email,
      texto: comentario,
      data: new Date().toLocaleString()
    };
    setLista([novoComentario, ...lista]);
    setEmail('');
    setComentario('');
  }

  return (
    <main className="container">
      <h2>Seção de Comentários</h2>

      <form onSubmit={handleSubmit} className="form-comentario">
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
          placeholder="seu@email.com"
        />

        <label>Comentário</label>
        <textarea 
          value={comentario} 
          onChange={e => setComentario(e.target.value)} 
          required 
          placeholder="Escreva seu comentário aqui..."
          rows="4"
        />

        <button type="submit">Enviar comentário</button>
      </form>

      <hr className="divisor" />

      <section className="lista-comentarios">
  {lista.length === 0 ? (
    <p className="mensagem-vazia">Seja o primeiro a comentar!</p>
  ) : (
    lista.map(item => (
      <div key={item.id} className="card-comentario">
        <h3>{item.email}</h3>
        
        <p className="data">Em {item.data}</p>
      
        <p className="texto">{item.texto}</p>
      </div>
    ))
  )}
</section>
    </main>
  );
}

export default App;