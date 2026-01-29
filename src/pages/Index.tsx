const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-foreground">
          Bem-vindo ao Lovable! 🚀
        </h1>
        <p className="text-xl text-muted-foreground max-w-md">
          Seu projeto está pronto. Conecte seu GitHub para importar seu código do Bolt.ai.
        </p>
        <div className="flex flex-col gap-3 text-left bg-card p-6 rounded-lg border max-w-md mx-auto">
          <h2 className="font-semibold text-lg">Próximos passos:</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Clique no nome do projeto (canto superior esquerdo)</li>
            <li>Vá em <strong>Settings → GitHub</strong></li>
            <li>Conecte sua conta GitHub</li>
            <li>Importe seu repositório</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;
