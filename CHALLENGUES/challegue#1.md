# Scenario # 1
Tente preparar um sistema simples para armazenar informações sobre alunos e professores e combiná-las para tutoria.

Crie uma classe User para criar objetos para professores e alunos. O construtor deve pegar os dados do usuário (nome, sobrenome, email, função), mas certifique-se de criar as propriedades apropriadas.

# Além disso, crie os seguintes métodos:

addCourse(curso, nível) - que lhe permitirá adicionar curso (por exemplo, matemática) e nível (por exemplo, 2 - quanto maior o número, maior o nível); no caso de um aluno, isso significará que ele está procurando ajuda neste nível, e no caso de um professor, significará que ele pode ajudar até este nível;

removeCourse(curso) - que permitirá que você remova o curso (por exemplo, se o aluno não estiver mais interessado em aprender matemática)
editCourse(curso, nível) - que lhe permitirá alterar o nível associado ao curso;

sendMessage(from, message) - que permitirá que você envie uma mensagem 'message' do usuário 'de' para o usuário descrito no objeto; informações completas sobre a mensagem enviada devem ser armazenadas no cache local (dica: use uma matriz para isso); o envio da mensagem em si só será simulado, declarar previamente a função sendEmail(de, para, mensagem) {} e utilizá-la no local apropriado;

showMessagesHistory() - que exibirá o histórico de todas as mensagens enviadas ao usuário no console.

# Scenario # 2
Create a new class, ExtendedUser, that will inherit from the User class.

Put a setter and getter named fullName in it. The getter should return the first name and last name concatenated into one string. The setter takes the concatenated first and last name (*e.g. 'Rafael Fifer') and splits it into first and last name (the split method), changing the appropriate properties of the object.

Based on the ExtendedUser class, create two more classes, Teacher and Student (inheritance). They should not have any new methods or properties, but only the default roles in their constructors to 'teacher' or 'student' respectively (i.e. their constructors will take three parameters instead of four: name, surname, and email);

Test your solution using the following code:

# Scenario # 3
Modify the ExtendedUser class (rewrite it) by adding a static match method to it. The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.

In case the course name is not provided, the method should return:

an empty array if there is no match (the teacher does not teach courses the student is interested in, or teaches courses at a lower level)
an array with {course, level} objects, if the teacher teaches the courses the student is interested in.
If the course name is passed as the last argument, then the method should return the {course, level} object in case of a correct match, or undefined otherwise.

Test your solution using the following code: