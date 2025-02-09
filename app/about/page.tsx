export default function AboutPage() {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-semibold">Sobre nós</h1>
        <p className="text-sm sm:text-base mb-4">
          Esta é uma plataforma que foi criada pelos próprios alunos da UNIFESP do Instituto de Ciência e Tecnologia com o objetivo de apoiar o aprendizado e o aprimoramento acadêmico dos estudantes da nossa Universidade Federal.
        </p>
        <p className="text-sm sm:text-base mb-4">
          Todo o dinheiro arrecadado pelo site será integralmente doado para instituições de caridade, dedicado a apoiar causas nobres envolvendo famílias carentes. A nossa missão é fazer a diferença, enquanto construímos uma comunidade de aprendizado para todos os alunos da UNIFESP.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4">Nossa Missão</h2>
        <p className="text-sm sm:text-base mb-4">
          Capacitar os alunos com acesso fácil a materiais de estudo de alta qualidade, promovendo uma experiência de aprendizado mais eficiente e eficaz.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4">Contato</h2>
        <p className="text-sm sm:text-base">
          Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato conosco em{" "}
          <a href="mailto:info@studymaterialhub.com" className="text-blue-600 hover:underline">
            info@studymaterialhub.com
          </a>
        </p>
  
        {/* Seção Hero para agradecer aos desenvolvedores */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Agradecimento aos Desenvolvedores e colaboradores</h2>
          <p className="mb-4 text-lg">Gostaríamos de agradecer aos incríveis desenvolvedores que tornaram este projeto possível:</p>
          <ul className="list-disc list-inside mx-auto inline-block text-left">
            <li>Marcos Hollmann</li>
            <li>Alejandro Araujo</li>
            <li>Shogo Miyazaki</li>
            <li>Felipe Calderaro</li>
            <li>Lucas Ferrara</li>
          </ul>

        </div>
      </div>
    );
  }