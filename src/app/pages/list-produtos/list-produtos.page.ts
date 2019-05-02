import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { LoadingController } from '@ionic/angular';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.page.html',
  styleUrls: ['./list-produtos.page.scss'],
})
export class ListProdutosPage implements OnInit {
  produtos: Produto[] = [];
  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };


  constructor(public loadingController: LoadingController,
              private produtosService: ProdutosService) { }

  async ngOnInit() {
    /* let prod = new Produto();
    prod.ativo = true;
    prod.categoria = "Saúde, Bem-estar e Beleza";
    prod.conteudo = `Nesse programa você poderá aprender a meditação de forma simples e fácil, praticando apenas 15 minutos por dia e tendo todos os benefícios no corpo e mente que essa técnica transformadora proporciona, eliminando seus estresse e melhorando a sua produtividade.
    A Meditação é uma prática milenar aceita mundialmente exatamente por sua característica livre e racional. Qualquer pessoa pode ter benefícios com a prática sem ter de mudar nada de sua forma de ver o mundo.`;
    prod.formato = "Ebook";
    prod.imagem = "https://static-public.klickpages.com.br/uploads/media/file/671367/meditao_3.jpg";
    prod.linkVenda = "http://mon.net.br/bufnn";
    prod.nome = "A arte da Meditação - Ebook";
    prod.nomeProdutor = "Digital Push";
       
    this.produtosService.createProduto(prod);

    let prod2 = new Produto();
    prod2.ativo = true;
    prod2.categoria = "Saúde, Bem-estar e Beleza";
    prod2.conteudo = `Noites sem dormir, preocupação em excesso, sofrimento por ansiedade que muitas vezes é incontrolável.
    As vezes você pode até estar pensar que tem algum problema psicológico... mas calma....     
    A Ansiedade não é brincadeira e pode gerar grandes prejuízos em varias áreas da vida, como profissional, financeira, seus relacionamentos, autoestima e familiar.    
    Atualmente junto com a Depressão, é o que mais encontro em minha sessões de Coaching, porem, após anos ajudando varios clientes percebi que algumas técnicas tinha mais eficácia que outras, então que decidi selecionar as mais funcionais técnicas de PNL, Inteligência Emocional e Coaching e desenvolvi um Treinamento Eficiente e um Livro de exercícios práticos para usar no dia-a-dia, para ajudar todos que passam por esse mal.    
    Foi então que nasceu o Acabe com a Ansiedade, algo único que ajuda tantas pessoas em um tempo recorde.    
    Se você sofre de Ansiedade isso acaba AGORA, pode acreditar!`;
    prod2.formato = "Ebook";
    prod2.imagem = "https://firebasestorage.googleapis.com/v0/b/app-spa-br.appspot.com/o/659389c92be0c8e8ea6dd39c8732d2b8.png?alt=media&token=36f77bab-0e3f-43a0-8f02-bcb1a6241ef6";
    prod2.linkVenda = "http://mon.net.br/buh5r";
    prod2.nome = "Acabe com a Ansiedade - Ebook";
    prod2.nomeProdutor = "Academia Arte Movimento";

    this.produtosService.createProduto(prod2);

    let prod3 = new Produto();
    prod3.ativo = true;
    prod3.categoria = "Saúde, Bem-estar e Beleza";
    prod3.conteudo = `Nesse programa você poderá aprender a meditação de forma fácil e simples, praticando apenas 5 minutos por dia você já começa a Meditar e tendo todos os benefícios no corpo e mente que essa técnica incrível e transformadora proporciona, eliminando seu estresse e melhorando a seu foco e produtividade.
    A Meditação é uma prática realizada por milhões de pessoas no mundo e muitas pessoas ainda não conhecem o benefício que a meditação pode proporcionar. Pode ser praticada em qualquer lugar de preferência silencioso que não seja atrapalhado durante a sua prática. Qualquer pessoa pode ter benefícios com a prática sem ter de mudar nada de sua forma de ver o mundo. A Meditação não é uma religião e isso é uma dúvida frequente das pessoas que se interessam e tem receito por conta de sua religião, a meditação é um estilo de vida. Os praticantes entendem que com a meditação conseguem melhorar muito a qualidade de vida e amenizar problemas de saúde.`;
    prod3.formato = "Ebook";
    prod3.imagem = "https://firebasestorage.googleapis.com/v0/b/app-spa-br.appspot.com/o/4950dab479a296951893e5f008c75077.png?alt=media&token=9ce1be2f-cdb0-4f40-8eff-45e330b4d76b";
    prod3.linkVenda = "http://mon.net.br/buhky";
    prod3.nome = "Medita-se";
    prod3.nomeProdutor = "Aleixo";

    this.produtosService.createProduto(prod3);

    let prod4 = new Produto();
    prod4.ativo = true;
    prod4.categoria = "Saúde, Bem-estar e Beleza";
    prod4.conteudo = `AKALMESSE é um produto destinado a pessoas com problemas de insônia, ansiedade, nervosismos e agitação. Pessoas estão a cada dia mais estressadas, com trabalho, casa, vida conjugal entre outros, e AKALMESSE ajuda a melhorar o humor, atuando 
    na qualidade do sono dando uma condição de maior tranquilidade as pessoas.`;
    prod4.formato = "Produto";
    prod4.imagem = "https://firebasestorage.googleapis.com/v0/b/app-spa-br.appspot.com/o/f8f1ca7950eb4422c0246f8799328b5b.png?alt=media&token=995e9c34-cc09-434b-a5f2-d87b4553775e";
    prod4.linkVenda = "https://akalmesse.com.br/";
    prod4.nome = "Akalmesse";
    prod4.nomeProdutor = "Valnutri";

    this.produtosService.createProduto(prod4);

    let prod5 = new Produto();
    prod5.ativo = true;
    prod5.categoria = "Saúde, Bem-estar e Beleza";
    prod5.conteudo = `RELAX HEALTH AJUDA NO COMBATE A INSÔNIA, ANSIEDADE E DEPRESSÃO! RELAX HEALTH AJUDA NO SENTIMENTO DE BEM ESTAR E PRAZER.`;
    prod5.formato = "Produto";
    prod5.imagem = "https://firebasestorage.googleapis.com/v0/b/app-spa-br.appspot.com/o/relax.jpg?alt=media&token=989db7f7-1b01-4a66-b2bc-a1f528c8ea39";
    prod5.linkVenda = "http://mon.net.br/bui78";
    prod5.nome = "Relax Health - Health Care USA";
    prod5.nomeProdutor = "Health Care USA";

    this.produtosService.createProduto(prod5);

    let prod6 = new Produto();
    prod6.ativo = true;
    prod6.categoria = "Saúde, Bem-estar e Beleza";
    prod6.conteudo = `Sleep Calm possui propriedades sedativas e relaxantes, reduz a tensão arterial e também tem efeito tranquilizante, proporcionando um sono sereno e com mais qualidade. Além disso possui alto teor de triptofano, que colabora com a produção de serotonina, auxiliando no combate à depressão e aliviando os sintomas da ansiedade.`;
    prod6.formato = "Produto";
    prod6.imagem = "https://firebasestorage.googleapis.com/v0/b/app-spa-br.appspot.com/o/sleepcalm.jpg?alt=media&token=d2bf1038-f3c1-4865-8e1f-f7724c5e6228";
    prod6.linkVenda = "http://mon.net.br/buif8";
    prod6.nome = "Sleep Calm";
    prod6.nomeProdutor = "LA Nature";

    this.produtosService.createProduto(prod6); */

    const loading = await this.loadingController.create({
      message: 'carregando produtos',
      showBackdrop: true
    });
    await loading.present();

    this.produtosService.getAllProdutos().subscribe(async (data) => {
      this.produtos = data.map(e => {        
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Produto;
      });
      

      await loading.dismiss();
    }, async (error) => await loading.dismiss()) 

  }

  openLink(link: string){
    window.open(link);
  }

}
