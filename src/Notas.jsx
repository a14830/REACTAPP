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
        setFormData({ nome: '', email: '', telefone: '', morada: '', codigopostal: '', mensagem: '' });
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
                        <textarea type="email" className="form-control" value={formData.nome} onChange={(e) =>
                            setFormData({ ...formData, nome: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Disciplina</label>
                        <textarea type="email" className="form-control" value={formData.disciplina} onChange={(e) =>
                            setFormData({ ...formData, disciplina: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Notas dos Testes</label>
                        <textarea type="text" className="form-control" value={formData.testes} onChange={(e) =>
                            setFormData({ ...formData, testes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) dos testes</label>
                        <textarea type="text" className="form-control" value={formData.porctestes} onChange={(e) =>
                            setFormData({ ...formData, porctestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos</label>
                        <textarea className="form-control" rows="3" value={formData.trabalhos} onChange={(e) =>
                            setFormData({ ...formData, trabalhos: e.target.value })}></textarea>
                    </div>
                    <div className="form-group">
                        <label>(%) dos Trabalhos</label>
                        <textarea className="form-control" rows="3" value={formData.porcTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, porcTrabalhos: e.target.value })}></textarea>
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
                            <p><strong>Nota Teste:</strong> {dadosSubmetidos.notaTeste}</p>
                            <p><strong>(%) dos Teste: 40</strong> {dadosSubmetidos.porcTeste}</p>
                            <p><strong>Nota Trabalho:</strong> {dadosSubmetidos.notaTrabalho}</p>
                            <p><strong>(%) dos Trabalho: 40</strong> {dadosSubmetidos.porcTrabalho}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    );
}



export default Notas;