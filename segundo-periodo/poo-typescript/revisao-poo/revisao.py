"""
Faça um programa em Python composto por funções que implemente o cenário descrito a seguir.


Cenário (história do usuário)
Como Diretor Acadêmico do IFRN eu preciso de
- um programa para matricular estudantes em uma turma.
Deve ser possível, além de
    - inserir o estudante na turma,
     obter a lista de todos os matriculados,
     obter um aluno dada a sua matrícula e verificar se um estudante já está matriculado.

Testes:
1. Adicione pelo menos 3 estudantes na turma;
2. liste todos os estudantes;
3 busque (e obtenha) um estudante dada a sua matrícula.
"""


alunos_matriculados ={}
turmas = {}
alunos_vinculados ={}

def matricular_aluno():
    qtd_alunos = int(input("Digite a quantidade de alunos que voce deseja marticular: "))
    for i in range(qtd_alunos):
        nome_estudante = input(f"Digite o nome do estudante {i}: ")
        numero_matricula = int(input("Informe o numero da matricula (ex:4555): "))
   
        if numero_matricula in alunos_matriculados:
            print("Já existe um aluno com essa matrícula!")
        else:
            alunos_matriculados[numero_matricula] = nome_estudante
            print(f"Aluno(a): {nome_estudante}. Foi matriculado com sucesso!")

def criar_turma():
    id_turma = len(turmas) + 1 
    nome_turma = input("Nome da nova turma: ")
    turmas[id_turma] = nome_turma
    alunos_vinculados[id_turma] = []  
    print(f"Turma criada: {id_turma} - {nome_turma}")


def vincular_aluno():
    if not alunos_matriculados:
        print("Não há alunos matriculados ainda!")
    if not turmas:
        print(" Não há turmas criadas ainda!")
       
    print("Estudantes matriculados:")
    for matricula, nome in alunos_matriculados.items():
        print(f"{matricula} - {nome}")
    
    dado_estudante = int(input("Digite a matrícula do aluno desejado: "))

    if dado_estudante not in alunos_matriculados:
        print("Matrícula não encontrada.")

    print("\nTurmas existentes:")
    for id_turma, nome in turmas.items():
        print(f"{id_turma} - {nome}")

    id_escolhido = int(input("Digite o ID da turma para vincular o aluno: "))

    if id_escolhido not in turmas:
        print("Turma não encontrada.")

    if dado_estudante in alunos_vinculados[id_escolhido]:
        print("O aluno já está vinculado a esta turma!")
    else:
        alunos_vinculados[id_escolhido].append(dado_estudante)
        print(f"{alunos_matriculados[dado_estudante]} foi vinculado à turma {turmas[id_escolhido]}")


def listar_turmas():
    if not turmas:
        print("Nenhuma turma cadastrada.")
    
    print("Turmas existentes:")
    for id_turma, nome in turmas.items():
        alunos = [alunos_matriculados[matricula] for matricula in alunos_vinculados[id_turma]]
        print(f"{id_turma} - {nome} | Alunos: {alunos if alunos else 'Nenhum aluno'}")

def listar_alunos():
    if not alunos_matriculados:
        print("Nenhum aluno matriculado.")

    print("Alunos matriculados:")
    for matricula, nome in alunos_matriculados.items():
        print(f"{matricula} - {nome}")
    
    
def menu():
    print("\n\t OPÇÕES\n1 - Matricular aluno\n2 - Criar uma turma" \
    "\n3 - Vincular aluno a uma turma\n4 - Listar Turmas\n5 - Listar alunos\n6 - Sair ")

if __name__ == "__main__":
    while True:
        menu()
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            matricular_aluno()
        elif opcao == "2":
            criar_turma()
        elif opcao == "3":
            vincular_aluno()
        elif opcao == "4":
            listar_turmas()
        elif opcao == "5":
            listar_alunos()
        elif opcao == "6":
            print("Saiu do programa.")
            break
        else:
            print("Opção inválida! Tente novamente.")
        


