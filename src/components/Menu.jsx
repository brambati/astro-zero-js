import { useState } from 'react';

// React · client:load (hidrata na hora: está acima da dobra)
export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="island">
      <button onClick={() => setOpen(!open)}>{open ? 'Fechar menu' : 'Abrir menu'}</button>
      {open && <ul><li>Serviços</li><li>Portfólio</li><li>Contato</li></ul>}
    </div>
  );
}
