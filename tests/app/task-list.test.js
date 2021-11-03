const Tarefas = require("../app/task-list");
const assert = require("assert").strict;
// const fs = require('fs');
const fs = require("fs");

describe("Teste de Integracao", function () {
  it("adicionar e completar a tarefa", function () {
    let tarefas = new Tarefas();
    assert.strictEqual(tarefas.listar().length, 0);

    tarefas.adicionar("atividade 1");
    assert.strictEqual(tarefas.listar().length, 1);
    assert.deepStrictEqual(tarefas.listar(), [
      { titulo: "atividade 1", completado: false },
    ]);

    tarefas.adicionar("atividade 2");
    assert.strictEqual(tarefas.listar().length, 2);
    assert.deepStrictEqual(tarefas.listar(), [
      { titulo: "atividade 1", completado: false },
      { titulo: "atividade 2", completado: false },
    ]);

    tarefas.completar("atividade 1");
    assert.deepStrictEqual(tarefas.listar(), [
      { titulo: "atividade 1", completado: true },
      { titulo: "atividade 2", completado: false },
    ]);

    // assert.notStrictEqual(tarefas.list().length, 1);
  });
});

describe("completar()", function () {
  it("irá falhar se nao houver tarefa", function () {
    let tarefas = new Tarefas();
    const expectedError = new Error("Não há nenhuma tarefa adicionada");

    assert.throws(() => {
      tarefas.completar("nao existe");
    }, expectedError);
  });
});

// describe("salvarEmArquivo()", function () {
// it("deve salvar uma unica tarefa", function (done) {
//     let tarefas = new Tarefas();
//     tarefas.adicionar("salvar um CSV");
//     tarefas.salvarEmArquivo((erro) => {
//         assert.strictEqual(fs.existsSync('tarefas.csv'), true);
//         let expectedFileContents = "Titulo,Completado\nsalvar um CSV,false\n";
//         let content = fs.readFileSync("tarefas.csv").toString();
//         assert.strictEqual(content, expectedFileContents);
//         done(erro);
//     });
// });
// });

//com promessa
// describe("salvarEmArquivo()", function () {
//     it("deve salvar uma unica tarefa", async function () {
//         let tarefas = new Tarefas();
//         tarefas.adicionar("salvar um CSV");
//         await tarefas.salvarEmArquivo();

//         assert.strictEqual(fs.existsSync('tarefas.csv'), true);
//         let expectedFileContents = "Titulo,Completado\nsalvar um CSV,false\n";
//         let content = fs.readFileSync("tarefas.csv").toString();
//         assert.strictEqual(content, expectedFileContents);
//     });
// });

//usando ganchos
describe("salvarEmArquivo()", function () {
  beforeEach(function () {
    this.tarefas = new Tarefas();
    this.tarefas.adicionar("salvar um CSV");
  });

  afterEach(function () {
    if (fs.existsSync("tarefas.csv")) {
      fs.unlinkSync("tarefas.csv");
    }
  });

  it("deve salvar uma unica tarefa sem erro", async function () {
    await this.tarefas.salvarEmArquivo();

    assert.strictEqual(fs.existsSync("tarefas.csv"), true);
    let expectedFileContents = "Titulo,Completado\nsalvar um CSV,false\n";
    let content = fs.readFileSync("tarefas.csv").toString();
    assert.strictEqual(content, expectedFileContents);
  });

  it("deve salvar uma unica tarefa concluida", async function () {
    this.tarefas.completar("salvar um CSV");
    await this.tarefas.salvarEmArquivo();

    assert.strictEqual(fs.existsSync("tarefas.csv"), true);
    let expectedFileContents = "Titulo,Completado\nsalvar um CSV,true\n";
    let content = fs.readFileSync("tarefas.csv").toString();
    assert.strictEqual(content, expectedFileContents);
  });
});
