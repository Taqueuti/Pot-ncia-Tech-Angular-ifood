# Protocolo HTTP

### O que é HTTP?

HTTP é um protocolo de transderência que possibilita que as pessoas iserem a url do seu site na Web
possam ver os conteúdos e dados que nele existem. A sigla vem do inglês **HyperText Transfer Protocol**

Qualquer servidor que você escolha para hospedar o site da sua empresa tem um programa projetado para
recever solicitações constantemente ao seu servidor.

Assim, quando um usuário acessa ou digita a URL do seu site, o navegador cria uma solicitação HTTP na web e a envia ao endereço de ip indicado pela URL.

Dessa forma, o servidor recebe essa solicitação e envia os arquivos associados que, nada mais são que os sites acessamos na internet.

### Como é o funcionamento do HTTP?
HTTP é um protocolo baseado em texto sem conexão, Isso significa que as pessoas que acessam o site da sua empresa enviam solicitações a servidores que as exibem na forma do seu site em formato de texto, imagens, e outros tipos de mídia. Depois que a soliicitação é atendida por um servidor, a conexão entre o usuário e o servidor é desconectada.

Uma nova conexão deve ser feita para cada solicitação, isto é, cada vez que alguém acessa o seu site. Em suma, quando alguém digita a URL do seu site em um navegador, é isto que acontece :

+ se a url pertencer a domínio próprio, o navegador primeiro se conecta a um servidor e recuperá o endereço IP correspondente ao seridor;
+ o navegador se conecta ao servidor e envia uma solicitação HTTP para a página da web desejado(que, neste exemplo, é o seu site);
+ o servidor receve a solicitação e verifica a página desejada. Se a página existir, o servidor a mostrará. Se o servidor não consegir encontrar a página solicitada, ele enviará uma mensagem de erro HTTP 404, ou seja, página não encontrada;
+ o navegador, então receve a página de volta e a conexão é fechada;
+ caso a página exista(e é isso que se espera), o navegador a analisa e procura outros elementos necessários para concluir a sua exibição, o que inclui seus textos, imagens e afins.
+ para cada um desses elementos, o navegador faz conexões adicionais e solicitações HTTP para o servidor para cada elemento;
+ quando o navegador terminar de carregor todos os elementos, a página será carregada na janela do navegador

### Qual é a diferença entre HTTP e HTTPS?

o HTTPS é uma extensão do HTTP. O “S” vem da palavra “secure” (“segurança” em inglês) e costuma ser oferecido pelo certificado SSL, oferecidos pela maioria dos servidores. Ele oferece uma conexão criptografada entre o servidor e o navegador, de maneira que o usuário possa inserir informações com mais segurança.


É por isso que a maioria dos e-commerces têm sites em HTTPS e o próprio navegador informa que é seguro digitar dados pessoais caso deseje realizar alguma ação, como uma compra online.

### Request Method
+ Get: O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
+ Head: O método head solicita uma resposta de forma idêntica ao método get, porém sem conter o corpo da resposta.
+ Post: O método post é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
+ Put: O método put substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
+ Delete: o método delete remove um recurso específico.
+ Connect: O método connect estabelece um túnel para o servidor identificado pelo recurso de destino.
+ Options: O método options é usado para descrever as opções de comunicação com o recurso de destino.
+ Trace: O método trace executa um teste de chamada loop-back junto com o cmainho para o recurso de destino.
+ Patch: O método Patch é utilizado para aplicar modificações parciais em um recurso
 
