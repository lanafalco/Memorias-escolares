# Imagens do portfólio

Arraste as suas fotos aqui e, em `js/script.js`, aponte cada campo `imagem`.

**O que já está preenchido neste molde:**

- ✅ Identidade do site ("Última Volta — Portfólio da Alana"): hero, marcadores, rodapé, cores e animações
- ✅ As **17 redações** com título, tema e categorias reais (`ENEM`, `Agro`, `Sociedade`, `Tecnologia`, `Meio Ambiente`)
- ❌ **Memórias** — deixadas em branco de propósito (6 placeholders em `fase-1/2/3`)
- ❌ **Textos das redações** — deixados como `"[ Texto da redação será inserido aqui. ]"`
- ❌ **Imagens** — nenhuma; os cards de redação aparecem sem foto até você adicionar

## Para adicionar fotos às redações

Em `js/script.js`, dentro de cada item de `REDACOES_DATA`, adicione:

```js
{ id: 1, titulo: "...", tema: "...",
  categorias: ["Meio Ambiente", "Sociedade"],
  imagem: 'assets/img/minha-foto.jpg',   // ← aponte para o arquivo aqui
  texto: "Seu texto completo.\n\nSegunda parágrafo." },
```

## Para preencher as memórias

Edite o array `MEMORIAS` (mesmo arquivo). Cada item:

```js
{ id: 7, fase: 'fase-1', tipo: 'foto',
  ano: '2014', titulo: 'Meu título',
  imagem: 'assets/img/minha-foto.jpg', alt: 'descrição' }
```

> Use `tipo: 'foto'` para fotos e `tipo: 'historia'` para textos.
> Memórias do tipo `historia` aceitam HTML no campo `conteudo`
> (ex: `<strong>negrito</strong>`). Imagens que não existirem são
> escondidas automaticamente — o layout não quebra.
