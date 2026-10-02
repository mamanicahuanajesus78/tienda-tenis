const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const { contenido, sha } = JSON.parse(event.body);
    
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = "mamanicahuanajesus78/tienda-tenis";
    const RAMA = "main";

    const respuesta = await fetch(
      `https://api.github.com/repos/${REPO}/contents/datos.js`,
      {
        method: "PUT",
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "Actualización automática",
          content: Buffer.from(contenido, 'utf-8').toString('base64'),
          sha: sha,
          branch: RAMA
        })
      }
    );

    const resultado = await respuesta.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, resultado })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};