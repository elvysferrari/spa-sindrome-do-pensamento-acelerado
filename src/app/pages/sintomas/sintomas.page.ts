import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {
  conteudo: string = "";
  sintomas: string = "";
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };
  constructor() {
    this.conteudo = `<p style="text-align: justify;">Ansiedade, ang&uacute;stia e inseguran&ccedil;a. Sentimentos que pulsam em larga escala na sociedade.</p>
    <p style="text-align: justify;"><br />Em parte, explicados por vari&aacute;veis sociais, como mais de 12 milh&otilde;es de desempregados do Pa&iacute;s e percal&ccedil;os econ&ocirc;micos e pol&iacute;ticos, aliados &agrave; inseguran&ccedil;a p&uacute;blica que virou rotina e obriga o cidad&atilde;o a um constante estado de alerta.</p>
    <p style="text-align: justify;">Junto com isso, a velocidade de informa&ccedil;&atilde;o da era digital e tsunamis tecnol&oacute;gicos for&ccedil;am a uma permanente moderniza&ccedil;&atilde;o, sob uma &oacute;tica question&aacute;vel de que se n&atilde;o fizermos isso estamos fadados a perdas de oportunidades pessoais e profissionais. Pesquisa da International Stress Management Association (ISMA-Brasil) <br />de 2016 revela que 81% da popula&ccedil;&atilde;o economicamente ativa sofre de ansiedade, que a ang&uacute;stia afeta 73% das pessoas e que 61% vivem preocupadas.</p>
    <p style="text-align: justify;">&ldquo;Estamos como povo sem esperan&ccedil;a. Isso tem a ver com a credibilidade de gestores, com economia do Pa&iacute;s. Qualquer pequena mudan&ccedil;a nos empolga, mas a realidade mostra que logo depois vem o balde de &aacute;gua fria. Quando vemos luz no fim do t&uacute;nel &eacute; a locomotiva contra n&oacute;s&rdquo;, resume a PhD em Psicologia Cl&iacute;nica, Ana Maria Rossi.</p>
    <p>A constru&ccedil;&atilde;o de pensamentos n&atilde;o &eacute; unifocal, mas multifocal, n&atilde;o dependendo apenas da vontade consciente, ou seja, do Eu, mas de fen&ocirc;menos inconscientes. Somente essa tese j&aacute; &eacute; suficiente para demonstrar que a mente humana &eacute; mais complexa do que postulam a psican&aacute;lise, as teorias comportamentais, as teorias cognitivas, as teorias existencialistas, as teorias sociol&oacute;gicas e as teorias psicolingu&iacute;sticas. <br />Somos t&atilde;o complexos que,quando n&atilde;o temos problemas, n&oacute;s os criamos.</p>
    <p>Milh&otilde;es de pessoas em todas as sociedades modernas cobram demais de si mesmas. Elas usam o pensamento n&atilde;o para se libertar, mas para se aprisionar e punir quando falham ou n&atilde;o correspondem a suas expectativas. Quem cobra excessivamente de si pode ser &oacute;timo para a sociedade e para sua empresa, mas certamente ser&aacute; seu pr&oacute;prio algoz.</p>
    <p>Pensar &eacute; bom, pensar com lucidez &eacute; &oacute;timo, por&eacute;m, pensar demais &eacute; uma bomba contra a sa&uacute;de ps&iacute;quica, o prazer de viver e a criatividade. <br />N&atilde;o s&atilde;o apenas as drogas que viciam, mas tamb&eacute;m o excesso de informa&ccedil;&atilde;o, de<br />trabalho intelectual, de atividades, de preocupa&ccedil;&atilde;o, de uso de celular. <br />Voc&ecirc; vive esses excessos? Todos eles levam a mente humana ao mais penetrante de todos os v&iacute;cios: o v&iacute;cio de pensar.</p>
    <p><strong>Por que o mundo se tornou um lugar de hiperativos?</strong></p>
    <p>Pelo excesso de informa&ccedil;&otilde;es n&atilde;o elaboradas, compromissos, press&otilde;es e uso de computador. No passado, o n&uacute;mero de informa&ccedil;&otilde;es dobrava a cada dois s&eacute;culos; hoje, a cada ano. O exagero de dados &eacute; registrado involuntariamente por um fen&ocirc;meno inconsciente &ndash; o registro autom&aacute;tico da mem&oacute;ria, ou RAM.</p>
    <p>Uma crian&ccedil;a de 7 a 10 anos guarda mais dados do que um fil&oacute;sofo grego quando seu pa&iacute;s estava no auge.</p>
    <p><strong>O pensamento acelerado rouba a qualidade da emo&ccedil;&atilde;o e envelhece o psiquismo. Qual &eacute; a explica&ccedil;&atilde;o?</strong></p>
    <p>A mente hiperexcitada empobrece a emo&ccedil;&atilde;o rapidamente. H&aacute; milh&otilde;es de jovens envelhecendo, com dificuldade de contemplar o belo, de ver a pr&oacute;pria exist&ecirc;ncia como um espet&aacute;culo. Ocorre uma contra&ccedil;&atilde;o da autoestima. A gera&ccedil;&atilde;o da era da ind&uacute;stria do lazer &eacute; a mais triste de que se tem not&iacute;cia.</p>
    <p><strong>Por que diz que estamos morrendo mais cedo emocionalmente, embora vivamos mais tempo biologicamente?</strong></p>
    <p>&Eacute; um paradoxo. Vivemos o dobro do tempo em rela&ccedil;&atilde;o ao homem da Idade M&eacute;dia, quando uma amigdalite podia ser fatal. Apesar de a expectativa de vida ter crescido, a SPA leva &agrave; morte precoce do tempo emocional. N&atilde;o o sentimos passar; os meses voam. Um dos desafios &eacute; dilatar o tempo, fazer muito do pouco, gastar horas com aquilo que o dinheiro n&atilde;o compra. Mas n&atilde;o sabemos lidar com isso. Temos varanda e n&atilde;o sentamos nela para conversar. Temos jardim e n&atilde;o vemos as flores.</p>
    <p><strong>Duvidar, criticar e determinar como uma forma de desacelerar o pensamento?</strong></p>
    <p>&Eacute; uma t&eacute;cnica ps&iacute;quica e pedag&oacute;gica. A d&uacute;vida, a cr&iacute;tica e a determina&ccedil;&atilde;o estrat&eacute;gica s&atilde;o princ&iacute;pios de sabedoria. O Eu, que representa nossa capacidade de escolha e consci&ecirc;ncia cr&iacute;tica, deve fazer, em sil&ecirc;ncio, uma higiene mental todos os dias: duvidar das falsas cren&ccedil;as, criticar cada pensamento perturbador e autodeterminar o relaxamento.</p>
    <p>&nbsp;</p>
    <h3 style="text-align: center;"><span style="color: #008000;">Dr. Augusto Cury.</span></h3>
    <p>&nbsp;</p>`;

    this.sintomas = `<p style="text-align: justify;">&nbsp;</p>
    <ul>
    <li>Dificuldade de aten&ccedil;&atilde;o e concentra&ccedil;&atilde;o;&nbsp;</li>
    <li>Dificuldade para relaxar e desacelerar os pensamentos;&nbsp;</li>
    <li>Falta de mem&oacute;ria;&nbsp;</li>
    <li>Mudan&ccedil;a de humor repentina;&nbsp;&nbsp;</li>
    <li>Irritabilidade;&nbsp;</li>
    <li>Cansa&ccedil;o mental que acaba se transformando em f&iacute;sico;&nbsp;</li>
    <li>Sofrimento por antecipa&ccedil;&atilde;o;&nbsp;&nbsp;</li>
    <li>M&aacute; qualidade do sono;&nbsp;&nbsp;</li>
    <li>Inquieta&ccedil;&atilde;o;&nbsp;</li>
    <li>Intoler&acirc;ncia ao ser contrariado.</li>
    </ul>
    <p>&nbsp;</p>`;
   }

  ngOnInit() {
  }

}
