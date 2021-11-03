const fs = require('fs').promises;

class Tarefas {

    constructor() {
        this.tarefas = [];
    }

    listar() {
        return [...this.tarefas];
    }

    adicionar(titulo) {
        let tarefa = {
            titulo: titulo,
            completado: false,
        }

        this.tarefas.push(tarefa);
    }

    completar(titulo) {
        if (this.tarefas.length === 0) {
            throw new Error("Não há nenhuma tarefa adicionada");
        }

        let tarefaEncontrada = false;
        this.tarefas.forEach((tarefa) => {
            if (tarefa.titulo === titulo) {
                tarefa.completado = true;
                tarefaEncontrada = true;
                return;
            }
        });

        if (!tarefaEncontrada) {
            throw new Error(`Nao foi encontrado nenhuma ação com o titulo: "${titulo}"`);
        }
    }

    //usando promessas
    salvarEmArquivo() {
        let fileContents = 'Titulo,Completado\n';
        this.tarefas.forEach((tarefas) => {
            fileContents += `${tarefas.titulo},${tarefas.completado}\n`
        });

        return fs.writeFile('tarefas.csv', fileContents);
    }
}

module.exports = Tarefas;