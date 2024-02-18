const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Professeur particulier
            </div>
            <h1 className="h1">Hello, mon nom est Clémence Fernandez</h1>
            <p>Je donne des cours, et oui</p>
          </div>
          {/* image */}
          <div>image</div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          {/* <RiArrowDownSLine /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
