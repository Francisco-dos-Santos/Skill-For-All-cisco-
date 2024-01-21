# LAB   Code Challenge #1
Scenario
You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).

Display all the images in the list in the console (full information: title, artist and date of creation).

# LAB   Code Challenge #2
Scenario
Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.

The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, create a new array, images1, using the Image constructor (don't copy the objects, but just create new ones based on the properties read).

Similarly, from images1 create a new array, images2, using getImage.

Display the contents of images2.

 # LAB   Code Challenge #3
Scenario
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:

contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list;
clear – which removes all objects from the list.
While creating an object, use the Image constructor prepared in the earlier task.

Test the script by calling the sequence:

em português
Crie um objeto images que será usado para armazenar as imagens. O objeto deve ter uma propriedade list, que será uma matriz de objetos e métodos de imagem:

contains - que toma como argumento o título da imagem e retorna true se a imagem já estiver colocada na lista (caso contrário, retorna false)
add – que usa três argumentos (título, artista e data) e cria um novo objeto com base neles e o adiciona à lista (se ainda não tiver sido adicionado)
show - que exibe todas as imagens da lista;
clear – que remove todos os objetos da lista.
Ao criar um objeto, use o construtor Image preparado na tarefa anterior.

Teste o script chamando a sequência:


#  LAB   Code Challenge #4
Scenario
Complement the images object from the previous task with two new methods (without rewriting the whole object):

edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.

Test the script by calling the sequence:
em português
Complemente o objeto images da tarefa anterior com dois novos métodos (sem reescrever o objeto inteiro):

edit - que usa três argumentos (título, artista e data) e, se encontrar uma imagem com o título fornecido na lista, altera suas propriedades de artista e data;
delete - que usa o argumento title e se encontrar uma imagem com esse título na lista, ele o exclui (para excluir um elemento list, use o método splice)
Além disso, adicione um método show ao construtor Image, que exibirá informações sobre essa imagem. Não reescreva o construtor. Use protótipos para essa finalidade. Em seguida, modifique o método show do objeto images para que ele use o método show de imagem única recém-criado para exibir as informações.

Teste o script chamando a sequência:


#  LAB   Code Challenge #5
Scenario
Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).

Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.

For testing, use the following piece of code:
em português
Escreva uma função, deepComp, que comparará dois objetos dados como argumentos (comparação profunda). Compare apenas propriedades (ignorar métodos) e considere a possibilidade de aninhamento (qualquer número de níveis).

As propriedades também podem ser objetos e matrizes. Estamos interessados nas propriedades disponíveis durante a enumeração habitual.

Para teste, use a seguinte parte do código:


