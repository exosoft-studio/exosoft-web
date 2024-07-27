import Button from "@/components/partials/button";
import Section from "@/components/partials/section";

export default function Home() {
  return (
    <main className="text-2xl lg:text-3xl leading-relaxed ">
      <Section bgColor='bg-color2 text-color5' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[700px] space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Steeven Tell-Brute</h1>
            <h2 className='text-2xl lg:text-4xl w-21 font-semibold leading-normal text-center'>Président d'ExoSoft</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-center items-start">
            <p className="flex-1">Steeven Tell-Brute est le président de la société Exosoft. Il a fait ses études d'informatique au Canada, avant de rentrer faire une pause avant le Covid. L'urgence sanitaire ne lui ayant pas permis un retour aux études, il est directement entré dans le marché de l'emploi guadeloupéen. L'offre et la demande étant différente de Montréal, il a revu ses ambitions d'ingénieur.</p>
            <p className="flex-1">L'envie d'entreprendre dans des métiers d'avenir, comme l'informatique quantique et la blockchain, étant forte, il s'est décidé à concevoir des logiciels sur mesure pour ses clients, mais aussi pour sa société. Le nom "Exosoft" vient du principe qu'il souhaite toujours créer des produits sortis tout droit de l'espace. C'est aussi un passionné de jeux vidéos.</p>
          </div>
          <div className="flex flex-col space-y-3 container">
            <p>Vous pouvez consulter son portfolio créatif pour de plus amples informations sur son parcours.</p>
            <Button href="https://portfolio.exosoft.studio" className="bg-color5 text-color2">Portfolio</Button>
          </div>
      </Section>
      <Section id='entropi' bgColor='bg-color5 text-color2' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[600px] lg:space-x-10 space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Entropi Network</h1>
            <h2 className='text-2xl lg:text-4xl w-21 font-semibold leading-normal text-center'>Blockchain antillaise</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-center items-start">
            <p className="flex-1">Entropi Network est un projet web3 encore à l'étape de la rédaction du white paper. Une Fondation sera responsable du projet à ses balbutiments. Le but de se projet est de contribuer à développer les lieux sociaux entres particuliers et entreprises dans la Caraïbe. Un écosysteme blockchain est l'idéal pour faciliter la vie de plusieurs citoyens antillais.</p>
            <p className="flex-1">L'écosystème regroupera des projets à but lucratif ou non lucratif, ainsi que d'autres projets en dehors de la Fondation Entropi. Il y aura au moins 2 ICOs privées au lancement du prototype. Laissez votre adresse mail sur le site officiel du projet Entropi, et vous serez mis au courant de la prochaine ICO.</p>
          </div>
          <div className="flex flex-row container">
            <Button href="https://portfolio.exosoft.studio" className="bg-color2 text-color5">Voir plus</Button>
          </div>
      </Section>
      <Section  id='stories' bgColor='bg-color2 text-color5' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[600px] lg:space-x-10 space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Stories</h1>
            <h2 className='text-2xl lg:text-4xl w-21 font-semibold leading-normal text-center'>Fiction et poésie</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-center items-start">
            <p className="flex-1">Steeven Tell-Brute est un écrivain en herbe, lecteur passionné de fantasy dans sa jeunesse. Stories est un projet qui dort depuis plusieurs années, un blog spécialement dédiation à l'autoédition. Son usage initial ne concerne pas Exosoft, mais le but long terme est de proposer des outils numériques pour d'autres écrivains en herbe (ou confirmés).</p>
            <p className="flex-1">Stories permettra de stimuler l'engagement des lecteurs, tout en montrant aux écrivains comment ils peuvent eux-même utiliser cet outil. Pour l'instant, c'est un projet entièrement dédidé à présenter l'univers litterraire de Steeven Tell-Brute. Vous pouvez nous contacter pour de plus amples informations sur ce projet.</p>
          </div>
          <div className="flex flex-row container">
            <Button href="https://portfolio.exosoft.studio" className="bg-color5 text-color2">Voir plus</Button>
          </div>
      </Section>
      <Section id='streams' bgColor='bg-color5 text-color2' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[600px] lg:space-x-10 space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Streams</h1>
            <h2 className='text-2xl lg:text-4xl w-21 font-semibold leading-normal text-center'>Streaming décentralisé</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-center items-start">
            <p className="flex-1">Streams est un projet musical dédié à stimuler la musique locale, en Guadeloupe Martinique. Le but du projet est de proposer un outil très customisable pour artistes comme auditeurs, musiciens ou labels. De multiples fonctionnalités sont prévues, comme la sortie d'une mixtape au format NFT.</p>
            <p className="flex-1">Pour l'instant, Streams sera avant tout une plateforme pour promouvoir la musique d'Ori Shun, artiste indépendant, ainsi que d'autres artistes de son entourage. Si le projet vous intéresse, vous pouvez nous contacter par email.</p>
          </div>
          <div className="flex flex-row container">
            <Button href="https://portfolio.exosoft.studio" className="bg-color2 text-color5">Voir plus</Button>
          </div>
      </Section>
      <Section id='blog' bgColor='bg-color2 text-color5' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[600px] lg:space-x-10 space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Blog</h1>
            <h2 className='text-2xl lg:text-4xl w-21 font-semibold leading-normal text-center'>Articles, tutos et actualités</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-center items-start">
            <p className="flex-1">Le Blog Exosoft compilera des articles sur l'actualité de la société, ainsi que l'actualité des autres projets Exosoft. Il sera aussi prévu d'y trouver des tutoriels pour utiliser les produits numériques qu'offrira Exosoft dans le futur.</p>
            <p className="flex-1">Les sujets porteront principalement sur la programmation informatique, la culture antillaise, et d'autres sujets variés qui tourneront autour des principes d'Exosoft : innovation et créativité.</p>
          </div>
          <div className="flex flex-row container">
            <Button href="https://portfolio.exosoft.studio" className="bg-color5 text-color2">Voir plus</Button>
          </div>
      </Section>
      <Section id='contact' bgColor='bg-color5 text-color2' className='flex lg:flex-col lg:justify-center items-center 
        lg:h-[600px] lg:space-x-10 space-y-10'>
          <div className="space-y-3">
            <h1 className='text-3xl lg:text-5xl w-21 font-semibold leading-normal text-center'>Contact</h1>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <p className="flex-1"><b>Téléphone : </b>0690 45 65 99</p>
            <p className="flex-1"><b>Email : </b>contact@exosoft.studio</p>
          </div>
      </Section>
    </main>
  );
}
