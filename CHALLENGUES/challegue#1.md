# Scenario
Tente preparar um sistema simples para armazenar informações sobre alunos e professores e combiná-las para tutoria.

Crie uma classe User para criar objetos para professores e alunos. O construtor deve pegar os dados do usuário (nome, sobrenome, email, função), mas certifique-se de criar as propriedades apropriadas.

# Além disso, crie os seguintes métodos:

addCourse(curso, nível) - que lhe permitirá adicionar curso (por exemplo, matemática) e nível (por exemplo, 2 - quanto maior o número, maior o nível); no caso de um aluno, isso significará que ele está procurando ajuda neste nível, e no caso de um professor, significará que ele pode ajudar até este nível;

removeCourse(curso) - que permitirá que você remova o curso (por exemplo, se o aluno não estiver mais interessado em aprender matemática)
editCourse(curso, nível) - que lhe permitirá alterar o nível associado ao curso;

sendMessage(from, message) - que permitirá que você envie uma mensagem 'message' do usuário 'de' para o usuário descrito no objeto; informações completas sobre a mensagem enviada devem ser armazenadas no cache local (dica: use uma matriz para isso); o envio da mensagem em si só será simulado, declarar previamente a função sendEmail(de, para, mensagem) {} e utilizá-la no local apropriado;

showMessagesHistory() - que exibirá o histórico de todas as mensagens enviadas ao usuário no console.