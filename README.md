# Site oficial — Vereador Negão Monteiro

Site institucional moderno, responsivo e leve, feito em HTML, CSS e JavaScript puros — sem dependências nem etapa de build. Basta abrir o `index.html` ou hospedar em qualquer serviço de site estático.

## Seções

- **Início (hero)** — chamada principal, estatísticas animadas do mandato e foto oficial
- **Quem sou** — biografia e linha do tempo da trajetória
- **Bandeiras** — as 6 prioridades do mandato em cards
- **Mandato em ação** — projetos de lei, indicações, requerimentos e emendas
- **Notícias** — destaques e prestação de contas
- **Fale comigo** — contatos, redes sociais e formulário de demandas
- **Botão flutuante de WhatsApp**

## Como personalizar

Todo o conteúdo atual é **ilustrativo** e deve ser substituído pelas informações reais do mandato:

1. **Foto oficial** — adicione a imagem em `img/negao-monteiro.jpg` e troque o bloco `.photo-placeholder` no `index.html` por `<img src="img/negao-monteiro.jpg" alt="Vereador Negão Monteiro">`.
2. **Textos** — edite biografia, trajetória, bandeiras, projetos e notícias direto no `index.html`.
3. **Estatísticas** — ajuste os atributos `data-count` na seção hero.
4. **Contatos** — atualize telefone, e-mail e o número do WhatsApp (link `wa.me` no fim do `index.html`).
5. **Redes sociais** — preencha os `href="#"` da seção de contato com os perfis reais.
6. **Cores** — a paleta segue a identidade visual da logo oficial (azul, amarelo e verde da bandeira de Rondônia) e fica nas variáveis CSS no topo de `css/style.css` (`--navy-900`, `--yellow`, `--green` etc.). Para usar a logo em imagem no lugar da marca vetorial, salve-a como `img/logo.png` e substitua o conteúdo de `.brand` no `index.html`.
7. **Formulário** — hoje ele abre o e-mail do visitante já preenchido (`mailto:`). Para envio direto, integre um serviço como [Formspree](https://formspree.io) trocando o handler em `js/main.js`.

## Como publicar no GitHub Pages

1. No repositório, acesse **Settings → Pages**
2. Em *Source*, escolha **Deploy from a branch**, selecione a branch principal e a pasta `/ (root)`
3. Salve — o site ficará disponível em `https://<usuario>.github.io/<repositorio>/`

## Rodar localmente

```bash
# qualquer servidor estático serve; por exemplo:
python3 -m http.server 8000
# depois abra http://localhost:8000
```
