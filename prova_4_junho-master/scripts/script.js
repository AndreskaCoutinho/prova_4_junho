const produto_div = $('#produtos')
const path = './image/'
const ext = '.jpg'
const imagens = [
    { item: 'celular-motorola', category: 'celular' },
    { item: 'celular-samsung', category: 'celular' },
    { item: 'aquecedor-eletrico', category: 'moveis' },
    { item: 'almofada', category: 'moveis' },
    { item: 'fone-ouvido', category: 'eletronico' },
    { item: 'papel-higienico', category: 'utensilio' },
    { item: 'sabao-omo', category: 'utensilio' },
    { item: 'guarda-roupa', category: 'moveis' },
    { item: 'tv-smart', category: 'eletronico'}
]

function load () {
    produto_div.html('')
    for (let index = 0; index < imagens.length; index++) {
        let div_produto = `
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">   
            <div class="card">
            <img src="${path}${imagens[index < imagens.length ? index : index - imagens.length].item}${ext}" width="150" height="300" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Produto ${index + 1}</h5>
                <p class="card-text"> Leve para casa um excelente produto, com nossa garantia por 3 anos.</p>
                <a href="#" class="btn btn-primary btn-comprar btn-block">Levar produto</a>
                </div>
            </div>
        </div>`
        produto_div.append(div_produto)           
    }
}

function filter_product (category) {
    produto_div.html('')
    imagens.map((img, index) => {
        if (img.category === category) {
            let div_produto = `
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">   
                <div class="card">
                <img src="${path}${img.item}${ext}" width="150" height="300" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Produto ${index}</h5>
                    <p class="card-text"> Leve para casa um excelente produto, com nossa garantia por 3 anos.</p>
                    <a href="#" class="btn btn-primary btn-comprar btn-block">Levar produto</a>
                    </div>
                </div>
            </div>`
            produto_div.append(div_produto)
        }
    })
               
}
