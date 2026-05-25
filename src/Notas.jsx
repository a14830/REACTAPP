import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notasTeste: '',
        porctestes: '',
        notaTrabalho: '',
        porcTrabalho: ''
    });

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ nome: '', disciplina: '', notasTeste: '', porctestes: '', notaTrabalho: '', porcTrabalho: '' });
        setDadosSubmetidos(null);
    }

    function eliminarTarefa() {
        setDadosSubmetidos([]);
    }

    return (
        <div className="mt-4 row">
            <div class="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="email" className="form-control" value={formData.Nome} onChange={(e) =>
                            setFormData({ ...formData, Nome: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="email" className="form-control" value={formData.Disciplina} onChange={(e) =>
                            setFormData({ ...formData, Disciplina: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Notas dos Testes</label>
                        <input type="text" className="form-control" value={formData.Testes} onChange={(e) =>
                            setFormData({ ...formData, Testes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) dos testes</label>
                        <input type="text" className="form-control" value={formData.testes} onChange={(e) =>
                            setFormData({ ...formData, testes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos</label>
                        <textarea className="form-control" rows="3" value={formData.Trabalhos} onChange={(e) =>
                            setFormData({ ...formData, Trabalhos: e.target.value })}></textarea>
                    </div>
                    <div className="form-group">
                        <label>(%) dos Trabalhos</label>
                        <textarea className="form-control" rows="3" value={formData.Trabalhos} onChange={(e) =>
                            setFormData({ ...formData, Trabalhos: e.target.value })}></textarea>
                    </div>
                   

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>
                    
                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Eliminar</button>
                </form>
            </div>

            <div class="col-4">
                {/* Mostra os dados submetidos se existirem */}
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome:</strong> {dadosSubmetidos.nome}</p>
                            <p><strong>Disciplina:</strong> {dadosSubmetidos.disciplina}</p>
                            <p><strong>NotaTeste:</strong> {dadosSubmetidos.notaTeste}</p>
                            <p><strong>PorcTeste:</strong> {dadosSubmetidos.porcTeste}</p>
                            <p><strong>NotaTrabalho:</strong> {dadosSubmetidos.notaTrabalho}</p>
                            <p><strong>PorcTrabalho:</strong> {dadosSubmetidos.porcTrabalho}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Notas;