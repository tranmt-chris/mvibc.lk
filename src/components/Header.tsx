import site from "@/src/data/site.json";

export default function Header(){
  const assetPrefix = process.env.DEPLOY_TARGET === "github-pages" ? "/mvibc.lk" : "";
  const logoSrc = site.logo ? `${assetPrefix}${site.logo}` : "";

  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#top" aria-label={`${site.shortName} home`}>{logoSrc ? <img className="brand-logo" src={logoSrc} alt={`${site.shortName} logo`} /> : <span className="brand-mark" aria-hidden="true">☸</span>}<span className="brand-text"><strong>{site.name}</strong><span>Anuradhapura, Sri Lanka</span></span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#top">Home</a><a href="#about">About</a><a href="#activities">Activities</a><a href="#visit">Contact</a></nav><a className="menu-button" href="#visit" aria-label="Contact and visit information">☰</a></div></header>}
